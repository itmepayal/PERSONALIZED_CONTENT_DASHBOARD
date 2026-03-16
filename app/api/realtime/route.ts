import axios from "axios";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const encoder = new TextEncoder();
  let interval: NodeJS.Timeout;

  const stream = new ReadableStream({
    start(controller) {
      const sendNews = async () => {
        try {
          const res = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
          );

          const articles = res.data.articles;

          if (!articles || articles.length === 0) return;

          // ✅ send ALL articles in one message
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(articles)}\n\n`)
          );
        } catch (err) {
          console.error("SSE error:", err);

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "API failed" })}\n\n`
            )
          );
        }
      };

      sendNews();
      interval = setInterval(sendNews, 10000);
    },

    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
