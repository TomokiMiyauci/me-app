import { type JSX, use } from "react";
import type { Highlighter } from "./type.ts";

export interface CodeBlockProps {
  code: string;
  highlighter: Highlighter;
  language?: string;
  fileName?: string;
  className?: string;
}

export default function CodeBlock(props: CodeBlockProps): JSX.Element {
  const { code, language, fileName, highlighter, className } = props;

  const highlighted = use(
    Promise.resolve(highlighter.highlight(code, { language })),
  );

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
