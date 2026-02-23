import type { JSX } from "react";
import type { AppProps } from "@/lib/app.tsx";
import Layout from "@/pages/layout.tsx";
import { PrivacyPolicyDocument } from "./privacy_policy.graphql.ts";
import { apolloClient } from "~lib";
import { notFound } from "react-app";
import language from "@/language.json" with { type: "json" };
import resolver from "@/lib/link.ts";
import Entry from "@/routes/entry.ts";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function PrivacyPolicy(
  props: AppProps,
): Promise<JSX.Element> {
  const { lang, i18n } = props;

  const queryResult = await apolloClient.query({
    query: PrivacyPolicyDocument,
    variables: { lang },
  });

  if (!queryResult.data) throw new Error("Failed to fetch privacy policy data");

  const doc = queryResult.data.allLegalDocument.edges?.[0]?.node;

  if (!doc) notFound();
  const { t } = i18n;

  return (
    <Layout
      {...props}
      translations={language.languages.map((lang) => ({
        lang,
        location: resolver.resolve(Entry.PrivacyPolicy, { lang }) ?? "",
      }))}
    >
      <main className="prose mx-auto">
        <h1>{t("document.privacy_policy")}</h1>

        <section>
          {doc.body &&
            <TinaMarkdown content={doc.body} />}
        </section>
      </main>
    </Layout>
  );
}
