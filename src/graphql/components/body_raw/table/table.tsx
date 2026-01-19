import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { JSX } from "react";
import type { Table as TableRaw } from "@/graphql/types.ts";

export default function Table(
  props: PortableTextTypeComponentProps<TableRaw>,
): JSX.Element {
  const { rows } = props.value;

  return (
    <table>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row?.cells?.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
