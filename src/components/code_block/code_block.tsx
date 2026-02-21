import type { JSX } from "react";
import type { Highlighter } from "./type.ts";

export interface CodeBlockProps {
  code: string;
  highlighter: Highlighter;
  language?: string;
  fileName?: string;
  className?: string;
}

export default async function CodeBlock(
  props: CodeBlockProps,
): Promise<JSX.Element> {
  const { code, language, fileName, highlighter, className } = props;

  const highlighted = await highlighter.highlight(code, { language });

  return (
    <div className={className}>
      {fileName &&
        (
          <header>
            <p>
              {fileName}
            </p>
          </header>
        )}

      <div
        className="overflow-scroll"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      >
      </div>
    </div>
  );
}
