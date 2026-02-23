"use client";

import { type JSX, useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidElement(
  props: React.JSX.IntrinsicElements["div"],
): JSX.Element {
  const { children, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true, darkMode: false });
      mermaid.run();
    }
  }, []);

  return (
    <div {...rest} ref={ref}>
      <pre className="mermaid flex justify-center">{children}</pre>
    </div>
  );
}
