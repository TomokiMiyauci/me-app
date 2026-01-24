import { HEADER_ACTION_ID } from "./constants.ts";
import type { Action } from "./types.ts";

interface Base {
  headers: HeadersInit;
}

interface StandardRequestResult extends Base {
  isRsc: false;
  isAction: boolean;
}

interface RscRequestResult extends Base {
  isRsc: true;
  isAction: false;
}

interface RscActionRequestResult extends Base {
  isRsc: true;
  isAction: true;
  action: Action;
}

export type Result =
  | StandardRequestResult
  | RscActionRequestResult
  | RscRequestResult;

/**
 * @throws Error If request is rsc, POST and not include action id.
 */
export function parseRequest(request: Request): Result {
  const isAction = request.method === "POST";
  const headers = {} satisfies HeadersInit;
  const url = new URL(request.url);

  if (url.searchParams.has("rsc")) {
    const id = request.headers.get(HEADER_ACTION_ID);

    if (isAction && typeof id === "string") {
      return { isRsc: true, isAction, action: { id }, headers };
    }

    if (isAction && id === null) {
      throw Error("Missing action id header for RSC action request");
    }

    return { isRsc: true, isAction: false, headers };
  } else {
    return { isRsc: false, isAction, headers };
  }
}
