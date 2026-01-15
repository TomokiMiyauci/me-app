export interface ParsedImageRef {
  id: string;
  width: number;
  height: number;
  mimeType: string;
  type: string;
}

const pattern =
  /^(?<type>[a-zA-Z]+?)-(?<id>[a-f0-9]+?)-(?<width>\d+?)x(?<height>\d+?)-(?<mimeType>[a-zA-Z0-9]+)$/;

/**
 * @param ref reference value
 * @throws SyntaxError If {@link ref} is invalid syntax.
 */
export function parseImageRef(ref: string): ParsedImageRef {
  const result = pattern.exec(ref);

  if (!result) throw new SyntaxError("Invalid syntax");

  const [_, type, id, widthRaw, heightRaw, mimeType] = result;

  if (!type || !id || !widthRaw || !heightRaw || !mimeType) {
    throw new SyntaxError("unreachable");
  }

  return {
    type,
    id,
    width: Number.parseInt(widthRaw),
    height: Number.parseInt(heightRaw),
    mimeType,
  };
}
