import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/calendar/book
 * Creates a calendar booking/event.
 *
 * Body JSON:
 *   - title: string (required)
 *   - start: ISO date string (required)
 *   - end: ISO date string (required)
 *   - timezone: string (required)
 *   - attendees?: [{email: string}]
 *   - location?: string
 *   - notes?: string
 *   - idempotencyKey?: string
 *
 * Phase 1: Returns fake eventId (no Google Calendar integration yet)
 */

interface BookingRequest {
  title: string;
  start: string;
  end: string;
  timezone: string;
  attendees?: { email: string }[];
  location?: string;
  notes?: string;
  idempotencyKey?: string;
}

// In-memory idempotency cache (Phase 1 only - use Redis/DB in production)
const idempotencyCache = new Map<string, { eventId: string; createdAt: number }>();
const IDEMPOTENCY_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) return false;

  const secret = process.env.DISCUTAI_TOOL_SECRET;
  if (!secret) {
    console.error('DISCUTAI_TOOL_SECRET not configured');
    return false;
  }

  return token === secret;
}

function cleanupIdempotencyCache() {
  const now = Date.now();
  const entries = Array.from(idempotencyCache.entries());
  for (const [key, value] of entries) {
    if (now - value.createdAt > IDEMPOTENCY_TTL_MS) {
      idempotencyCache.delete(key);
    }
  }
}

export async function POST(request: NextRequest) {
  // Security: Verify Bearer token
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Invalid or missing Authorization header' },
      { status: 401 }
    );
  }

  let body: BookingRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const { title, start, end, timezone, attendees, location, notes, idempotencyKey } = body;

  // Validate required fields
  if (!title || !start || !end || !timezone) {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Missing required fields: title, start, end, timezone' },
      { status: 400 }
    );
  }

  // Validate ISO date format
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Invalid date format. Use ISO 8601.' },
      { status: 400 }
    );
  }

  // Validate start < end
  if (startDate >= endDate) {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Start time must be before end time.' },
      { status: 400 }
    );
  }

  // Validate attendees format if provided
  if (attendees) {
    if (!Array.isArray(attendees)) {
      return NextResponse.json(
        { error: 'Bad Request', message: 'Attendees must be an array.' },
        { status: 400 }
      );
    }
    for (const attendee of attendees) {
      if (!attendee.email || typeof attendee.email !== 'string') {
        return NextResponse.json(
          { error: 'Bad Request', message: 'Each attendee must have an email field.' },
          { status: 400 }
        );
      }
    }
  }

  // Clean up expired idempotency keys periodically
  cleanupIdempotencyCache();

  // Check idempotency key
  if (idempotencyKey) {
    const cached = idempotencyCache.get(idempotencyKey);
    if (cached) {
      // Return the same response as before (idempotent)
      return NextResponse.json({
        eventId: cached.eventId,
        htmlLink: `https://calendar.google.com/calendar/event?eid=${cached.eventId}`,
        start,
        end,
        timezone,
        _idempotent: true,
      });
    }
  }

  // Phase 1: Generate fake eventId
  // In Phase 2, this will create an actual Google Calendar event
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // Store idempotency key if provided
  if (idempotencyKey) {
    idempotencyCache.set(idempotencyKey, { eventId, createdAt: Date.now() });
  }

  // Log the booking for debugging (Phase 1)
  console.log('[Calendar Book] New booking:', {
    eventId,
    title,
    start,
    end,
    timezone,
    attendees: attendees?.length || 0,
    location: location || null,
    notes: notes ? `${notes.substring(0, 50)}...` : null,
  });

  return NextResponse.json({
    eventId,
    htmlLink: `https://calendar.google.com/calendar/event?eid=${eventId}`,
    start,
    end,
    timezone,
  });
}
