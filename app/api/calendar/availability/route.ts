import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/calendar/availability
 * Returns available time slots for booking.
 *
 * Query params:
 *   - from: ISO date string (required)
 *   - to: ISO date string (required)
 *   - durationMin: number, default 30
 *   - tz: timezone string, default "America/Sao_Paulo"
 *
 * Phase 1: Returns hardcoded sample slots (no Google Calendar integration yet)
 */

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

export async function GET(request: NextRequest) {
  // Security: Verify Bearer token
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Invalid or missing Authorization header' },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);

  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const durationMin = parseInt(searchParams.get('durationMin') || '30', 10);
  const tz = searchParams.get('tz') || 'America/Sao_Paulo';

  // Validate required params
  if (!from || !to) {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Missing required params: from, to' },
      { status: 400 }
    );
  }

  // Validate ISO date format
  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
    return NextResponse.json(
      { error: 'Bad Request', message: 'Invalid date format. Use ISO 8601.' },
      { status: 400 }
    );
  }

  // Phase 1: Return hardcoded sample slots
  // In Phase 2, this will query Google Calendar for actual availability
  const sampleSlots = generateSampleSlots(fromDate, toDate, durationMin);

  return NextResponse.json({
    timezone: tz,
    slots: sampleSlots,
    meta: {
      from,
      to,
      durationMin,
    },
  });
}

/**
 * Generate sample availability slots for testing (Phase 1)
 * Creates slots at 9:00, 10:00, 11:00, 14:00, 15:00, 16:00 for each day
 */
function generateSampleSlots(from: Date, to: Date, durationMin: number) {
  const slots: { start: string; end: string }[] = [];
  const slotHours = [9, 10, 11, 14, 15, 16]; // Business hours

  const current = new Date(from);
  current.setHours(0, 0, 0, 0);

  const endDate = new Date(to);
  endDate.setHours(23, 59, 59, 999);

  while (current <= endDate) {
    // Skip weekends
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      for (const hour of slotHours) {
        const slotStart = new Date(current);
        slotStart.setHours(hour, 0, 0, 0);

        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + durationMin);

        // Only include slots within the requested range
        if (slotStart >= from && slotEnd <= to) {
          slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
          });
        }
      }
    }

    // Move to next day
    current.setDate(current.getDate() + 1);
  }

  return slots;
}
