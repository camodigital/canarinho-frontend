/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModalidades
// ====================================================

export interface GetModalidades_colecaoModalidades {
  __typename: "ColecaoModalidades";
  slug: string | null;
}

export interface GetModalidades {
  colecaoModalidades: GetModalidades_colecaoModalidades[];
}

export interface GetModalidadesVariables {
  locale?: string | null;
  limit?: number | null;
}
