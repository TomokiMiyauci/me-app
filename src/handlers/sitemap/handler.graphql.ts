// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PostSlugsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PostSlugsQuery = { __typename?: 'Query', posts: { __typename?: 'PostConnection', edges?: Array<{ __typename?: 'PostConnectionEdges', node?: { __typename?: 'Post', language: string, slug: string } | null } | null> | null } };


export const PostSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"posts"},"name":{"kind":"Name","value":"postConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostSlugsQuery, PostSlugsQueryVariables>;