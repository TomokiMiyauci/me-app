import type { ReactNode } from "react";
import type { RscPayload } from "../types.ts";
import Rsc from "./rsc.tsx";

export interface RscPromiseProps {
  promise: Promise<RscPayload>;
}

export default async function RscPromise(
  props: RscPromiseProps,
): Promise<ReactNode> {
  const payload = await props.promise;

  return <Rsc payload={payload} />;
}
