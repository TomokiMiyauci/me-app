// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BlogQueryVariables = Types.Exact<{
  lang: Types.Scalars['String']['input'];
}>;


export type BlogQuery = { __typename?: 'Query', allBlog: Array<{ __typename?: 'Blog', title: string, description?: string | null, coverImage?: any | null }> };

export type HomeByLangQueryVariables = Types.Exact<{
  lang: Types.Scalars['String']['input'];
}>;


export type HomeByLangQuery = { __typename?: 'Query', home: Array<{ __typename?: 'Home', title: string, description?: string | null, coverImage?: any | null }> };


export const BlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allBlog"},"name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]}}]} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;
export const HomeByLangDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeByLang"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"home"},"name":{"kind":"Name","value":"homes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomeMeta"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomeMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Home"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"coverImage"}}]}}]} as unknown as DocumentNode<HomeByLangQuery, HomeByLangQueryVariables>;