import { textContent, type MinimarkTree } from 'minimark';

const WORDS_PER_MINUTE = 200;

export function getReadingMinutes(body: MinimarkTree | null | undefined): number {
  if (!body?.value?.length) return 1;
  const text = body.value.map((node) => textContent(node)).join(' ');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
