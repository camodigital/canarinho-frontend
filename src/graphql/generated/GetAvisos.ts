/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAvisos
// ====================================================

export interface GetAvisos_colecaoAvisos {
  __typename: "ColecaoAvisos";
  slug: string | null;
}

export interface GetAvisos {
  colecaoAvisos: GetAvisos_colecaoAvisos[];
}

export interface GetAvisosVariables {
  locale?: string | null;
  limit?: number | null;
}
