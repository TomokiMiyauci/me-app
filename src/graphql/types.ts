// deno-lint-ignore-file
// deno-fmt-ignore-file
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type Author = Node & {
  __typename?: 'Author';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AuthorEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Author>;
};

export type AuthorOrderByInput = {
  name?: InputMaybe<SortOrder>;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  name?: InputMaybe<StringWhereInput>;
};

export type Blog = Node & {
  __typename?: 'Blog';
  coverImage?: Maybe<Scalars['URL']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  language: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Blog>;
};

export type BlogOrderByInput = {
  description?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  description?: InputMaybe<StringWhereInput>;
  language?: InputMaybe<StringWhereInput>;
  title?: InputMaybe<StringWhereInput>;
};

export type Category = Node & {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DatetimeWhereInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Home = Node & {
  __typename?: 'Home';
  coverImage?: Maybe<Scalars['URL']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  language: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type HomeConnection = {
  __typename?: 'HomeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HomeEdge = {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Home>;
};

export type HomeOrderByInput = {
  description?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type HomeWhereInput = {
  AND?: InputMaybe<Array<HomeWhereInput>>;
  NOT?: InputMaybe<Array<HomeWhereInput>>;
  OR?: InputMaybe<Array<HomeWhereInput>>;
  description?: InputMaybe<StringWhereInput>;
  language?: InputMaybe<StringWhereInput>;
  title?: InputMaybe<StringWhereInput>;
};

export type LegalDocument = Node & {
  __typename?: 'LegalDocument';
  body?: Maybe<Scalars['String']['output']>;
  effectiveAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  language: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type LegalDocumentConnection = {
  __typename?: 'LegalDocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LegalDocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LegalDocumentEdge = {
  __typename?: 'LegalDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LegalDocument>;
};

export type LegalDocumentOrderByInput = {
  effective_at?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type LegalDocumentWhereInput = {
  AND?: InputMaybe<Array<LegalDocumentWhereInput>>;
  NOT?: InputMaybe<Array<LegalDocumentWhereInput>>;
  OR?: InputMaybe<Array<LegalDocumentWhereInput>>;
  effective_at?: InputMaybe<DatetimeWhereInput>;
  language?: InputMaybe<StringWhereInput>;
  type?: InputMaybe<StringWhereInput>;
};

export type Node = {
  id?: Maybe<Scalars['ID']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = Node & {
  __typename?: 'Post';
  authors?: Maybe<Array<Maybe<Author>>>;
  body?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  coverImage?: Maybe<Scalars['URL']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  language: Scalars['String']['output'];
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<PostTags>>>;
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Post>;
};

export type PostOrderByInput = {
  description?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  modified_at?: InputMaybe<SortOrder>;
  published_at?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PostTags = Node & {
  __typename?: 'PostTags';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  description?: InputMaybe<StringWhereInput>;
  language?: InputMaybe<StringWhereInput>;
  modified_at?: InputMaybe<DatetimeWhereInput>;
  published_at?: InputMaybe<DatetimeWhereInput>;
  slug?: InputMaybe<StringWhereInput>;
  title?: InputMaybe<StringWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  authorConnection?: Maybe<AuthorConnection>;
  authors: Array<Author>;
  blogConnection?: Maybe<BlogConnection>;
  blogs: Array<Blog>;
  homeConnection?: Maybe<HomeConnection>;
  homes: Array<Home>;
  legalDocumentConnection?: Maybe<LegalDocumentConnection>;
  legalDocuments: Array<LegalDocument>;
  postConnection?: Maybe<PostConnection>;
  posts: Array<Post>;
};


export type QueryAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAuthorsArgs = {
  orderBy?: InputMaybe<AuthorOrderByInput>;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryBlogConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBlogsArgs = {
  orderBy?: InputMaybe<BlogOrderByInput>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryHomeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHomesArgs = {
  orderBy?: InputMaybe<HomeOrderByInput>;
  where?: InputMaybe<HomeWhereInput>;
};


export type QueryLegalDocumentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLegalDocumentsArgs = {
  orderBy?: InputMaybe<LegalDocumentOrderByInput>;
  where?: InputMaybe<LegalDocumentWhereInput>;
};


export type QueryPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsArgs = {
  orderBy?: InputMaybe<PostOrderByInput>;
  where?: InputMaybe<PostWhereInput>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringWhereInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};
