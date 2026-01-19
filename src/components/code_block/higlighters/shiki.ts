import type { Highlighter, HighlightOptions } from "../type.ts";
import { type BundledLanguage, bundledLanguages, codeToHtml } from "shiki";

export default class ShikiHighlighter implements Highlighter {
  highlight(
    code: string,
    options: HighlightOptions,
  ): Promise<string> {
    const { language } = options;
    const lang = toBundledLanguage(language) ?? "text";
    const content = convertHighlightedContent(code, []);

    return codeToHtml(content, { lang, theme: "github-light" });
  }
}

function toBundledLanguage(
  language: string | undefined,
): BundledLanguage | undefined {
  if (!language) return;
  if (language in bundledLanguages) return language as BundledLanguage;
}

function convertHighlightedContent(
  content: string,
  highlightedLines: number[] | undefined,
): string {
  if (!highlightedLines) return content;

  const sentences = content.split("\n");
  const newSentences = highlightedLines.reduce((acc, lineNumber) => {
    const index = lineNumber - 1;

    if (index in acc) {
      const sentence = acc[index];

      acc[index] = sentence + "// [!code highlight]";
    }

    return acc;
  }, sentences);

  return newSentences.join("\n");
}
