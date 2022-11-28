import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const LoadTranslation = (locale: string, namespaces: string[]) => {
  return serverSideTranslations(locale!, namespaces)
}