// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BlogByLangQueryVariables = Types.Exact<{
  lang: Types.Scalars['String']['input'];
}>;


export type BlogByLangQuery = { __typename?: 'Query', blogs: Array<{ __typename?: 'Blog', title: string, description?: string | null, coverImage?: any | null }> };

export type ArticlesByLangQueryVariables = Types.Exact<{
  lang: Types.Scalars['String']['input'];
}>;


export type ArticlesByLangQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Post', slug: string, title: string, description?: string | null, createdAt?: any | null, coverImage?: any | null }> };


export const BlogByLangDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogByLang"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"blogs"},"name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostsMeta"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostsMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]} as unknown as DocumentNode<BlogByLangQuery, BlogByLangQueryVariables>;
export const ArticlesByLangDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArticlesByLang"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"articles"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Article"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Article"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]} as unknown as DocumentNode<ArticlesByLangQuery, ArticlesByLangQueryVariables>;