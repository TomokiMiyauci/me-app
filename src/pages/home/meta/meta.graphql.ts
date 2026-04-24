// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type HomeMetaFragment = { __typename?: 'Home', title: string, description?: string | null, coverImage?: any | null };

export const HomeMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomeMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Home"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]} as unknown as DocumentNode<HomeMetaFragment, unknown>;