export interface HighlightOptions {
  language: string | undefined;
}

export interface Highlighter {
  highlight(code: string, options: HighlightOptions): string | Promise<string>;
}
