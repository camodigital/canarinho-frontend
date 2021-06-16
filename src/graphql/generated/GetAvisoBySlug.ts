/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAvisoBySlug
// ====================================================

export interface GetAvisoBySlug_colecaoAvisos {
  __typename: "ColecaoAvisos";
  Title: string | null;
}

export interface GetAvisoBySlug {
  colecaoAvisos: GetAvisoBySlug_colecaoAvisos[];
}

export interface GetAvisoBySlugVariables {
  slug?: string | null;
}
