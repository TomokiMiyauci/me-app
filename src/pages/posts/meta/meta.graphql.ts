// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PostsMetaFragment = { __typename?: 'Blog', title: string, description?: string | null, coverImage?: string | null };

export const PostsMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostsMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"cover_image"}}]}}]} as unknown as DocumentNode<PostsMetaFragment, unknown>;