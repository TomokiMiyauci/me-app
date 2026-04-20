import type { JSX } from "react";
import resolver from "@/lib/link.ts";
import {
  // AllPostsDocument,
  // type AllPostsQuery,
  PostBySlugDocument,
  // TranslationBySlugDocument,
  // type TranslationBySlugQuery,
} from "./post.graphql.ts";
import { notFound } from "react-app";
import type { AppProps } from "@/lib/app.tsx";
import Entry from "@/routes/entry.ts";
import { Article } from "~component";
import Layout from "@/pages/layout.tsx";
import PostMeta from "./meta/meta.tsx";
import { apolloClient, cloudinary } from "~lib";
import BodyRaw from "@/graphql/components/body_raw/body_raw.tsx";
// import { dirname, join, resolve } from "@std/path";

export default async function Post(
  props: AppProps,
): Promise<JSX.Element> {
  const { lang, params, i18n } = props;
  const slug = params["slug"];

  if (!slug) {
    throw new Error("Invalid slug");
  }

  const decodedSlug = decodeURIComponent(slug);
  const [result] = await Promise.all([
    apolloClient.query({
      query: PostBySlugDocument,
      variables: { slug: decodedSlug, lang },
    }),
    // apolloClient.query({ query: AllPostsDocument }),
  ]);

  // if (!allDocuments.data) throw new Error("Failed to fetch post data");

  // const map = createMap({ posts: allDocuments.data });

  if (!result.data) throw new Error("Failed to fetch post data");

  const postPage = result.data.posts[0];
  // const id = postPage?.id;

  if (!postPage) notFound();

  // const translationsQuery = await apolloClient.query({
  //   query: TranslationBySlugDocument,
  //   variables: { slug },
  // });

  // if (!translationsQuery.data) {
  //   throw new Error("Failed to fetch translation data");
  // }

  const title = postPage.title ?? "";

  // const normalized = normalizeTranslation(translationsQuery.data);

  const alternatives: [] = [];
  // const basePath = postPage._sys.path;

  // function toVirtualURL(path: string): URL {
  //   const absolutePath = toAbsolute(basePath, path);
  //   return new URL(`virtual:${absolutePath}`);
  // }

  // function resolveURL(urlLike: string): string | undefined {
  //   return urlLike;
  //   // const url = URL.canParse(urlLike)
  //   //   ? new URL(urlLike)
  //   //   : toVirtualURL(urlLike);

  //   // if (url.protocol === "virtual:") {
  //   //   const mappted = map[url.toString()];

  //   //   if (mappted) {
  //   //     return resolver.resolve(Entry.Post, {
  //   //       lang: mappted.language,
  //   //       slug: mappted.slug,
  //   //     }) ?? undefined;
  //   //   }

  //   //   return;
  //   // }

  //   // return url.toString();
  // }

  const { t } = i18n;
  return (
    <Layout translations={alternatives} {...props}>
      <PostMeta
        fragment={postPage}
      />

      <main className="space-y-2 lg:max-w-[65ch] mx-auto">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a href={resolver.resolve(Entry.Home, { lang }) ?? undefined}>
                {t("resource.home")}
              </a>
            </li>
            <li>
              <a href={resolver.resolve(Entry.Posts, { lang }) ?? undefined}>
                {t("resource.blog")}
              </a>
            </li>
            <li>
              <a href="#">
                {title}
              </a>
            </li>
          </ul>
        </div>

        <Article
          title={title}
          body={postPage.body && <BodyRaw fragment={postPage.body} />}
          image={postPage.coverImage && (
            <figure>
              <img
                className="w-full aspect-video object-fit"
                src={cloudinary
                  .image(postPage.coverImage)
                  .setDeliveryType("fetch")
                  .format("auto")
                  .quality("auto")
                  .toURL()}
              />
            </figure>
          )}
        />
      </main>
    </Layout>
  );
}

interface NormalizedTranslation {
  slug: string;
  language: string;
}

interface TranslationAlternation {
  location: string;
  lang: string;
}

// function createMap(
//   { posts }: { posts: AllPostsQuery },
// ): Record<string, Mapping> {
//   const map: Record<string, Mapping> = {};

//   posts.postConnection.edges?.forEach((edge) => {
//     const node = edge?.node;
//     if (!node) return;

//     const slug = node.slug;
//     const language = node.language;

//     if (!slug || !language) return;

//     const id = new URL(`virtual:${join("/", node._sys.path)}`);

//     map[id.toString()] = {
//       slug,
//       language,
//       type: "Post",
//     };
//   });

//   return map;
// }

interface Mapping {
  slug: string;
  language: string;
  type: "Post";
}

// function isTranslationAlternation(
//   _: object,
// ): _ is TranslationAlternation {
//   return true;
// }

// function normalizeTranslation(
//   query: TranslationBySlugQuery,
// ): NormalizedTranslation[] {
//   const result = query.allTranslationMetadata.edges?.flatMap((t) => {
//     return t?.node?.translations?.map((t) => {
//       switch (t?.value?.__typename) {
//         case "Post": {
//           const value = t.value;
//           return {
//             language: value.language,
//             slug: value.slug,
//           };
//         }
//       }

//       return {};
//     }).filter(isNormalizedTranslation) ?? [];
//   });

//   return result ?? [];
// }

// function isNormalizedTranslation(
//   value: object,
// ): value is NormalizedTranslation {
//   return value !== null && "slug" in value && "language" in value;
// }

// function toAbsolute(base: string, path: string): string {
//   if (path.startsWith("/")) {
//     return path;
//   }

//   const dir = dirname(join("/", base));
//   return resolve(dir, path);
// }
