export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // GET /api/hello
    if (url.pathname === "/api/hello" && request.method === "GET") {
      const data = {
        message: "Hello from TechieFit! #DevOpsDemo, #CloudflareWorkers",
        timestamp: new Date().toISOString(),
        region: request.cf?.colo || "unknown",
        country: request.cf?.country || "unknown",
        deployed: true,
      };

      console.log("API request received:", data);

      console.log("Request headers:", Object.fromEntries(request.headers.entries()));




      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Serve HTML/CSS/JS from public/
    return env.ASSETS.fetch(request);
  },
};
