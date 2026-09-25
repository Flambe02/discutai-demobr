'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const VIDEO_SRC = '/mascot/pepper-turn.mp4';
const POSTER_SRC = '/mascot/pepper-poster.jpg';

// The clip is a head turn; these timestamps were measured on the footage
// (public/mascot/pepper-turn.mp4 is re-encoded all-intra so every frame is
// seekable instantly). Outside this window the character barely moves.
const TURN_START = 0.45; // s — looking towards the text (viewer's left)
const TURN_FRONT = 1.6; //  s — facing the viewer (also the poster frame)
const TURN_END = 2.95; //   s — looking to the viewer's right
// The character blinks mid-turn (frames 22–33 at 24 fps). Passing through it
// looks natural, but it must never *rest* there or it seems asleep, so a
// resting target inside this window snaps to the nearest open-eyed frame.
const BLINK_FROM = 0.88; // frame 21 — eyes open
const BLINK_TO = 1.42; //   frame 34 — eyes fully open again (30–33 are heavy-lidded)

const SMOOTHING = 6; // exponential follow rate (1/s): higher = snappier
const AMBIENT_PERIOD = 9; // s — slow look-around on touch devices
const MIN_SEEK_STEP = 1 / 60; // don't seek for sub-frame changes

type Mode = 'static' | 'track' | 'ambient';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const avoidBlink = (t: number) =>
  t > BLINK_FROM && t < BLINK_TO ? (t - BLINK_FROM < BLINK_TO - t ? BLINK_FROM : BLINK_TO) : t;

function detectMode(): Mode {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (reducedMotion || saveData) return 'static';
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches ? 'track' : 'ambient';
}

/**
 * Red pepper mascot. On desktop the horizontal cursor position scrubs the
 * head-turn video (smoothed), so the character seems to follow the cursor.
 * Touch devices get a slow look-around; reduced-motion / data-saver users get
 * the static poster. The poster is server-rendered, so there is no layout
 * shift and no video cost until the client decides a mode.
 */
export default function PepperMascot({ className = '' }: { className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastMouseX = useRef<number | null>(null);
  const [mode, setMode] = useState<Mode>('static');
  const [ready, setReady] = useState(false);
  const hasVideo = mode !== 'static';

  // Pick the mode on the client and follow reduced-motion changes.
  useEffect(() => {
    setMode(detectMode());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setMode(detectMode());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Hybrid devices (touch laptops) may report a coarse primary pointer: switch
  // to cursor tracking as soon as a real mouse moves.
  useEffect(() => {
    if (mode !== 'ambient') return;
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      lastMouseX.current = e.clientX; // honoured by the tracking loop on start
      setMode('track');
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [mode]);

  // Prime the video on the resting frame, then reveal it over the poster.
  // Keyed on hasVideo (not mode) so ambient → track keeps the loaded video.
  useEffect(() => {
    const video = videoRef.current;
    if (!hasVideo || !video) return;
    setReady(false);

    const onSeeked = () => setReady(true);
    const prime = () => {
      video.addEventListener('seeked', onSeeked, { once: true });
      video.currentTime = TURN_FRONT;
    };
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) prime();
    else video.addEventListener('loadeddata', prime, { once: true });

    // iOS only buffers media after a play() call; muted inline playback is
    // allowed, and we pause immediately — frames are then driven by seeking.
    // If it is refused (e.g. Low Power Mode) the poster simply stays visible.
    video.play().then(() => video.pause()).catch(() => {});

    return () => {
      video.removeEventListener('loadeddata', prime);
      video.removeEventListener('seeked', onSeeked);
    };
  }, [hasVideo]);

  // Drive video.currentTime from the cursor (track) or a slow sway (ambient).
  useEffect(() => {
    const video = videoRef.current;
    const box = boxRef.current;
    if (mode === 'static' || !ready || !video || !box) return;

    let raf = 0;
    let last = 0;
    let visible = true;
    let current = video.currentTime || TURN_FRONT;
    let target = TURN_FRONT;
    const t0 = performance.now();

    const tick = (now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;

      if (mode === 'ambient') {
        // Cosine ping-pong between the two extremes, starting from the front pose.
        const phase = ((now - t0) / 1000) * ((2 * Math.PI) / AMBIENT_PERIOD);
        target = lerp(TURN_START, TURN_END, 0.5 - 0.5 * Math.cos(phase + Math.PI * 0.46));
      }

      current += (target - current) * (1 - Math.exp(-SMOOTHING * dt));
      if (!video.seeking && Math.abs(video.currentTime - current) > MIN_SEEK_STEP) {
        video.currentTime = current;
      }

      // In tracking mode, sleep once settled; a pointer move wakes the loop.
      if (mode === 'track' && Math.abs(target - current) < 0.002) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (raf || !visible) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const sleep = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Map the cursor so the character faces the viewer when the cursor is
    // level with it, and turns towards it on either side.
    const timeForX = (x: number) => {
      const rect = box.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      return avoidBlink(
        x <= cx
          ? lerp(TURN_START, TURN_FRONT, clamp01(x / Math.max(1, cx)))
          : lerp(TURN_FRONT, TURN_END, clamp01((x - cx) / Math.max(1, window.innerWidth - cx))),
      );
    };
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      lastMouseX.current = e.clientX;
      target = timeForX(e.clientX);
      wake();
    };
    const onPointerLeave = () => {
      target = TURN_FRONT;
      wake();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else sleep();
    });
    io.observe(box);

    if (mode === 'track') {
      if (lastMouseX.current != null) target = timeForX(lastMouseX.current);
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onPointerLeave);
    }
    wake();

    return () => {
      sleep();
      io.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [mode, ready]);

  return (
    <div ref={boxRef} className={`relative aspect-square w-full ${className}`}>
      {/* Ambient red glow + floor light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(220,38,38,0.45),rgba(220,38,38,0.12)_45%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4%] left-1/2 h-[12%] w-[70%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.45),transparent_70%)] blur-xl"
      />

      {/* Dashed cursor trail (decorative) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-[4%] -top-[6%] h-[70%] w-[70%] text-red-500/70"
        fill="none"
      >
        <path
          // Stays outside the character's silhouette (right edge ≈ x 310), ending at the cursor.
          d="M372 390 C 396 310, 400 210, 380 140 C 366 96, 346 76, 326 70"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          className="motion-safe:animate-[mascot-dash_6s_linear_infinite]"
        />
        <path
          d="M300 20 l 0 46 l 12 -12 l 10 22 l 8 -4 l -10 -21 l 17 0 z"
          fill="rgba(239,68,68,0.15)"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 6px rgba(239,68,68,0.9))' }}
        />
      </svg>

      {/* Poster: server-rendered, always present underneath the video. The
          footage has a pure black background; `screen` blending removes it
          on the dark page. */}
      <Image
        src={POSTER_SRC}
        alt="Mascote da The Pimentão Rouge Company: um pimentão vermelho sorridente"
        fill
        priority
        sizes="(min-width: 1024px) 560px, 80vw"
        className={`select-none object-contain mix-blend-screen transition-opacity duration-500 ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
        draggable={false}
      />

      {hasVideo && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full select-none object-contain mix-blend-screen transition-opacity duration-500 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
