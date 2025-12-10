export async function GET(): Promise<Response> {
    try {
      // You can add custom health checks here, such as checking database or other services
      return new Response(JSON.stringify({ status: 'ok' }), { status: 200 });
    } catch (error: unknown) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
        { status: 500 }
      );
    }
  }