import { NextRequest } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA_PATH = join(process.cwd(), 'data', 'proposals.json');

function readProposals() {
  const raw = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

export async function GET() {
  try {
    const proposals = readProposals();
    return Response.json(proposals);
  } catch {
    return Response.json({ error: 'Failed to read proposals' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!Array.isArray(body)) {
      return Response.json({ error: 'Expected an array of proposals' }, { status: 400 });
    }
    writeFileSync(DATA_PATH, JSON.stringify(body, null, 2), 'utf-8');
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Failed to save proposals' }, { status: 500 });
  }
}
