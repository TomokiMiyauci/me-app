import { type JSX, lazy } from "react";
import type { AppProps } from "@/lib/app.tsx";
import LayoutEntry from "./layout.tsx";
import NotFoundEntry from "./not_found/not_found.tsx";
import ErrorEntry from "./error/error.tsx";

export const Home = lazy(() => import("./home/home.tsx"));

export const Posts = lazy(() => import("./posts/posts.tsx"));

export const Post = lazy(() => import("./post/post.tsx"));

export const PrivacyPolicy = lazy(() =>
  import("./privacy_policy/privacy_policy.tsx")
);

export function NotFound(props: AppProps): JSX.Element {
  return (
    <LayoutEntry {...props}>
      <NotFoundEntry {...props} />
    </LayoutEntry>
  );
}

export function Error(props: AppProps): JSX.Element {
  return (
    <LayoutEntry {...props}>
      <ErrorEntry {...props} />
    </LayoutEntry>
  );
}
