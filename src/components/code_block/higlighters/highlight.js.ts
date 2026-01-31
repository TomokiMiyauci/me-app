import type { Highlighter, HighlightOptions } from "../type.ts";
import hljs from "highlight.js";

export default class HighlightJs implements Highlighter {
  highlight(code: string, options: HighlightOptions): string | Promise<string> {
    const { language } = options;
    if (language) {
      const hasSupported = hljs.getLanguage(language);

      if (hasSupported) {
        const result = hljs.highlight(code, {
          language,
          ignoreIllegals: true,
        });

        return result.value;
      }
    }

    const result = hljs.highlightAuto(code);

    return result.value;
  }
}
