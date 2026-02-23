// deno-lint-ignore-file
// deno-fmt-ignore-file
import * as Types from '@/graphql/types.ts';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PrivacyPolicyQueryVariables = Types.Exact<{
  lang: Types.Scalars['String']['input'];
}>;


export type PrivacyPolicyQuery = { __typename?: 'Query', allLegalDocument: { __typename?: 'Legal_documentConnection', edges?: Array<{ __typename?: 'Legal_documentConnectionEdges', node?: { __typename?: 'Legal_document', body?: Types.Scalars['JSON']['output'] | null } | null } | null> | null } };


export const PrivacyPolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PrivacyPolicy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allLegalDocument"},"name":{"kind":"Name","value":"legal_documentConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"privacy_policy","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PrivacyPolicyQuery, PrivacyPolicyQueryVariables>;