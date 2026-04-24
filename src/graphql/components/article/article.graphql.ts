// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ArticleFragment = { __typename?: 'Post', title: string, description?: string | null, createdAt?: any | null, coverImage?: any | null };

export const ArticleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Article"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]} as unknown as DocumentNode<ArticleFragment, unknown>;