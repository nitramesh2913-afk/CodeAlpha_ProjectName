import { Language } from "../types";

const ENDPOINTS = [
  "https://libretranslate.de/translate",
  "https://translate.terraprint.co/translate",
  "https://libretranslate.com/translate",
];

export async function translateText(
  text: string,
  source: Language,
  target: Language
): Promise<string> {
  if (source === target) return text;

  for (const endpoint of ENDPOINTS) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: source,
          target: target,
          format: "text",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) continue;

      const data = await response.json();
      if (data.translatedText) return data.translatedText;
    } catch {
      // try next endpoint
    }
  }

  throw new Error("All translation endpoints failed. Check your internet connection and try again.");
}
