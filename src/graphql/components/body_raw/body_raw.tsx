import type { JSX } from "react";
// import { CodeBlock, ShikiHighlighter } from "~component";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// const Mermaid = lazy(() => import("./mermaid.tsx"));

// const component = {
//   code_block: (props) => {
//     const { lang, value } = props ?? {};

//     if (lang === "mermaid") {
//       return <Mermaid className="not-prose my-8">{value}</Mermaid>;
//     }

//     return (
//       <CodeBlock
//         language={lang}
//         highlighter={new ShikiHighlighter()}
//         code={value ?? ""}
//         className="not-prose my-5"
//       />
//     );
//   },
// } satisfies Components;

// function createAComponent(resolveURL: ResolvePath): Components["a"] {
//   return (props) => {
//     const { url, children } = props ?? {};
//     const path = url ? resolveURL(url) : undefined;

//     return <a href={path}>{children}</a>;
//   };
// }

interface Resolve {
  (specifier: string): string | undefined;
}

export interface BodyRawProps {
  fragment: string;
  // resolveURL: ResolvePath;
}

export default function BodyRaw(props: BodyRawProps): JSX.Element {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
    >
      {props.fragment}
    </Markdown>
  );
}
