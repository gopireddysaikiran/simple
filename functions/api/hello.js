// Cloudflare Pages Function — serves as the backend Worker
// Route: GET /api/hello

export async function onRequestGet(context) {
  const data = {
    message: "Hello from Cloudflare Workers! 🚀",
    timestamp: new Date().toISOString(),
    region: context.request.cf?.colo || "unknown",
    country: context.request.cf?.country || "unknown",
    deployed: true,
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
