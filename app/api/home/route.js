// app/api/home/route.js
import { getValues } from '../../lib/fetch';

export async function GET(req) {
  try {
    const spreadsheetId = process.env.SHEET_ID;
    const range = 'Sheet1!A3:N53';

    const result = await getValues(spreadsheetId, range);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data', details: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}