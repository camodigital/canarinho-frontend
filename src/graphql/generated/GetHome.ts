/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHome
// ====================================================

export interface GetHome_paginaHome_Title {
  __typename: "ComponentTitlePageTitulo";
  Title: string | null;
  Subtitle: string | null;
}

export interface GetHome_paginaHome_Aviso_Home_Icon {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_paginaHome_Aviso_Home_aviso {
  __typename: "ColecaoAvisos";
  slug: string | null;
}

export interface GetHome_paginaHome_Aviso_Home {
  __typename: "ComponentNoticeNotice";
  Icon: GetHome_paginaHome_Aviso_Home_Icon | null;
  Title: string | null;
  aviso: GetHome_paginaHome_Aviso_Home_aviso | null;
}

export interface GetHome_paginaHome {
  __typename: "PaginaHome";
  Title: GetHome_paginaHome_Title | null;
  Aviso_Home: GetHome_paginaHome_Aviso_Home | null;
}

export interface GetHome {
  paginaHome: GetHome_paginaHome | null;
}

export interface GetHomeVariables {
  locale?: string | null;
}
