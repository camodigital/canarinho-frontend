/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModalidadeBySlug
// ====================================================

export interface GetModalidadeBySlug_colecaoModalidades {
  __typename: "ColecaoModalidades";
  Title: string | null;
}

export interface GetModalidadeBySlug {
  colecaoModalidades: GetModalidadeBySlug_colecaoModalidades[];
}

export interface GetModalidadeBySlugVariables {
  locale?: string | null;
  slug?: string | null;
}
