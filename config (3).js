// ===== keys/config.js =====
// ONLY API keys (and the model each one talks to) live in this file.
// Everything else — settings, UI, pipeline logic — lives in index.html.
// Keep this file OUT of any PUBLIC GitHub repo if you don't want strangers
// burning through your free quota.
//
// This file must stay at keys/config.js, sitting in a "keys" folder next
// to index.html — that relative path is the only place index.html looks.
//
// HOW THIS WORKS
// One shared list, used for every stage (planning, coding, reviewing,
// fixing) — not a separate set of keys per stage anymore.
//   - Only ONE entry needs a real key for the tool to run.
//   - Extra entries are just fallback capacity: the moment an entry's key
//     hits a rate limit (or an auth error), Codebox automatically rotates
//     to the next entry in the list. If every entry is exhausted, it tells
//     you plainly that all keys are used up.
//   - Each entry can point at a completely different model — mix and
//     match freely across providers. The model name is never shown in
//     the UI, it's purely a backend detail.
// Get free OpenRouter keys at https://openrouter.ai/keys — you can
// generate several under one account, or use keys from different accounts.
//
// Ten slots are ready below. Leave any slot's key as "PASTE_KEY_HERE" and
// Codebox will just skip it — you don't need to fill in all ten.
// The "model" field on each slot already has a working free model set —
// change it to any OpenRouter model id if you'd rather use something else.

const CODEBOX_KEYS = [
  { key: "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", model: "nvidia/nemotron-3-ultra-550b-a55b:free" },
  { key: "PASTE_KEY_HERE", model: "qwen/qwen3-coder:free" },
  { key: "PASTE_KEY_HERE", model: "z-ai/glm-5.2:free" },
  { key: "PASTE_KEY_HERE", model: "deepseek/deepseek-chat-v3.1:free" },
  { key: "PASTE_KEY_HERE", model: "nvidia/nemotron-3-super-120b-a12b:free" },
  { key: "PASTE_KEY_HERE", model: "google/gemma-4-31b-it:free" },
  { key: "PASTE_KEY_HERE", model: "qwen/qwen3-coder:free" },
  { key: "PASTE_KEY_HERE", model: "nvidia/nemotron-3-ultra-550b-a55b:free" },
  { key: "PASTE_KEY_HERE", model: "deepseek/deepseek-chat-v3.1:free" },
  { key: "PASTE_KEY_HERE", model: "z-ai/glm-5.2:free" },
];
