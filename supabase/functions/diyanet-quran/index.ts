import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const DIYANET_BASE = "https://acikkaynakkuran-dev.diyanet.gov.tr";

interface DiyanetVerse {
  arabic_script: { text: string };
  translation: { text: string };
  surah_id: number;
  verse_id_in_surah: number;
  page_number: number;
}

async function fetchChapter(chapterId: number, apiKey: string): Promise<DiyanetVerse[]> {
  const fetchUrl = `${DIYANET_BASE}/api/v1/chapters/${chapterId}`;
  const res = await fetch(fetchUrl, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`Chapter ${chapterId} failed: ${res.status}, body: ${text.substring(0, 200)}`);
    return [];
  }
  const json = await res.json();
  return json.data || [];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("DIYANET_API_KEY");
    if (!apiKey) throw new Error("DIYANET_API_KEY not configured");

    const url = new URL(req.url);
    const chapterParam = url.searchParams.get("chapter");

    // Single chapter mode
    if (chapterParam) {
      const chapterId = parseInt(chapterParam);
      if (isNaN(chapterId) || chapterId < 1 || chapterId > 114) {
        return new Response(JSON.stringify({ error: "Invalid chapter (1-114)" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const verses = await fetchChapter(chapterId, apiKey);
      return new Response(JSON.stringify({ data: verses }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // All chapters mode - fetch in parallel batches
    const BATCH_SIZE = 15;
    const allVerses: DiyanetVerse[] = [];

    for (let start = 1; start <= 114; start += BATCH_SIZE) {
      const end = Math.min(start + BATCH_SIZE - 1, 114);
      const batch = [];
      for (let i = start; i <= end; i++) {
        batch.push(fetchChapter(i, apiKey));
      }
      const results = await Promise.all(batch);
      for (const verses of results) {
        allVerses.push(...verses);
      }
    }

    console.log(`Fetched ${allVerses.length} verses from Diyanet API`);

    return new Response(JSON.stringify({ data: allVerses, count: allVerses.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("diyanet-quran error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
