// deno-lint-ignore-file
// deno-fmt-ignore-file
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
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
  JSON: { input: TinaMarkdownContent; output: TinaMarkdownContent; }
  Reference: { input: any; output: any; }
};

export type Author = Document & Node & {
  __typename?: 'Author';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  cover_image?: Maybe<AuthorCover_Image>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection';
  edges?: Maybe<Array<Maybe<AuthorConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type AuthorConnectionEdges = {
  __typename?: 'AuthorConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Author>;
};

export type AuthorCover_Image = {
  __typename?: 'AuthorCover_image';
  description?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AuthorCover_ImageFilter = {
  description?: InputMaybe<StringFilter>;
  source?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AuthorCover_ImageMutation = {
  description?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorFilter = {
  cover_image?: InputMaybe<AuthorCover_ImageFilter>;
  name?: InputMaybe<StringFilter>;
};

export type AuthorMutation = {
  cover_image?: InputMaybe<AuthorCover_ImageMutation>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Blog = Document & Node & {
  __typename?: 'Blog';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  cover_image?: Maybe<BlogCover_Image>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type BlogConnection = Connection & {
  __typename?: 'BlogConnection';
  edges?: Maybe<Array<Maybe<BlogConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type BlogConnectionEdges = {
  __typename?: 'BlogConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Blog>;
};

export type BlogCover_Image = {
  __typename?: 'BlogCover_image';
  description?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BlogCover_ImageFilter = {
  description?: InputMaybe<StringFilter>;
  source?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogCover_ImageMutation = {
  description?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogFilter = {
  cover_image?: InputMaybe<BlogCover_ImageFilter>;
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogMutation = {
  cover_image?: InputMaybe<BlogCover_ImageMutation>;
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Category = Document & Node & {
  __typename?: 'Category';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CategoryConnection = Connection & {
  __typename?: 'CategoryConnection';
  edges?: Maybe<Array<Maybe<CategoryConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type CategoryConnectionEdges = {
  __typename?: 'CategoryConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Category>;
};

export type CategoryFilter = {
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type CategoryMutation = {
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  documents: DocumentConnection;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  format?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};


export type CollectionDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** A relay-compliant pagination connection */
export type Connection = {
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Document = {
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentFilter = {
  author?: InputMaybe<AuthorFilter>;
  blog?: InputMaybe<BlogFilter>;
  category?: InputMaybe<CategoryFilter>;
  home?: InputMaybe<HomeFilter>;
  legal_document?: InputMaybe<Legal_DocumentFilter>;
  post?: InputMaybe<PostFilter>;
  tag?: InputMaybe<TagFilter>;
  translation_metadata?: InputMaybe<Translation_MetadataFilter>;
};

export type DocumentMutation = {
  author?: InputMaybe<AuthorMutation>;
  blog?: InputMaybe<BlogMutation>;
  category?: InputMaybe<CategoryMutation>;
  home?: InputMaybe<HomeMutation>;
  legal_document?: InputMaybe<Legal_DocumentMutation>;
  post?: InputMaybe<PostMutation>;
  tag?: InputMaybe<TagMutation>;
  translation_metadata?: InputMaybe<Translation_MetadataMutation>;
};

export type DocumentNode = Author | Blog | Category | Folder | Home | Legal_Document | Post | Tag | Translation_Metadata;

export type DocumentUpdateMutation = {
  author?: InputMaybe<AuthorMutation>;
  blog?: InputMaybe<BlogMutation>;
  category?: InputMaybe<CategoryMutation>;
  home?: InputMaybe<HomeMutation>;
  legal_document?: InputMaybe<Legal_DocumentMutation>;
  post?: InputMaybe<PostMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<TagMutation>;
  translation_metadata?: InputMaybe<Translation_MetadataMutation>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type Home = Document & Node & {
  __typename?: 'Home';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  cover_image?: Maybe<HomeCover_Image>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomeConnection = Connection & {
  __typename?: 'HomeConnection';
  edges?: Maybe<Array<Maybe<HomeConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type HomeConnectionEdges = {
  __typename?: 'HomeConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Home>;
};

export type HomeCover_Image = {
  __typename?: 'HomeCover_image';
  description?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomeCover_ImageFilter = {
  description?: InputMaybe<StringFilter>;
  source?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeCover_ImageMutation = {
  description?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomeFilter = {
  cover_image?: InputMaybe<HomeCover_ImageFilter>;
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeMutation = {
  cover_image?: InputMaybe<HomeCover_ImageMutation>;
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Legal_Document = Document & Node & {
  __typename?: 'Legal_document';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  effective_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Legal_DocumentConnection = Connection & {
  __typename?: 'Legal_documentConnection';
  edges?: Maybe<Array<Maybe<Legal_DocumentConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type Legal_DocumentConnectionEdges = {
  __typename?: 'Legal_documentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Legal_Document>;
};

export type Legal_DocumentFilter = {
  body?: InputMaybe<RichTextFilter>;
  effective_at?: InputMaybe<DatetimeFilter>;
  language?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Legal_DocumentMutation = {
  body?: InputMaybe<Scalars['JSON']['input']>;
  effective_at?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  createAuthor: Author;
  createBlog: Blog;
  createCategory: Category;
  createDocument: DocumentNode;
  createFolder: DocumentNode;
  createHome: Home;
  createLegal_document: Legal_Document;
  createPost: Post;
  createTag: Tag;
  createTranslation_metadata: Translation_Metadata;
  deleteDocument: DocumentNode;
  updateAuthor: Author;
  updateBlog: Blog;
  updateCategory: Category;
  updateDocument: DocumentNode;
  updateHome: Home;
  updateLegal_document: Legal_Document;
  updatePost: Post;
  updateTag: Tag;
  updateTranslation_metadata: Translation_Metadata;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAuthorArgs = {
  params: AuthorMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateBlogArgs = {
  params: BlogMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  params: CategoryMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  params: DocumentMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateFolderArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateHomeArgs = {
  params: HomeMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateLegal_DocumentArgs = {
  params: Legal_DocumentMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  params: PostMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateTagArgs = {
  params: TagMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateTranslation_MetadataArgs = {
  params: Translation_MetadataMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  params: AuthorMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateBlogArgs = {
  params: BlogMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  params: CategoryMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  params: DocumentUpdateMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateHomeArgs = {
  params: HomeMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateLegal_DocumentArgs = {
  params: Legal_DocumentMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  params: PostMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateTagArgs = {
  params: TagMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateTranslation_MetadataArgs = {
  params: Translation_MetadataMutation;
  relativePath: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Post = Document & Node & {
  __typename?: 'Post';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  authors?: Maybe<Array<Maybe<PostAuthors>>>;
  body?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Maybe<PostCategories>>>;
  cover_image?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  modified_at?: Maybe<Scalars['String']['output']>;
  published_at: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<PostTags>>>;
  title: Scalars['String']['output'];
};

export type PostAuthors = {
  __typename?: 'PostAuthors';
  author?: Maybe<PostAuthorsAuthor>;
};

export type PostAuthorsAuthor = Author;

export type PostAuthorsAuthorFilter = {
  author?: InputMaybe<AuthorFilter>;
};

export type PostAuthorsFilter = {
  author?: InputMaybe<PostAuthorsAuthorFilter>;
};

export type PostAuthorsMutation = {
  author?: InputMaybe<Scalars['String']['input']>;
};

export type PostCategories = {
  __typename?: 'PostCategories';
  category?: Maybe<PostCategoriesCategory>;
};

export type PostCategoriesCategory = Category;

export type PostCategoriesCategoryFilter = {
  category?: InputMaybe<CategoryFilter>;
};

export type PostCategoriesFilter = {
  category?: InputMaybe<PostCategoriesCategoryFilter>;
};

export type PostCategoriesMutation = {
  category?: InputMaybe<Scalars['String']['input']>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostFilter = {
  authors?: InputMaybe<PostAuthorsFilter>;
  body?: InputMaybe<RichTextFilter>;
  categories?: InputMaybe<PostCategoriesFilter>;
  cover_image?: InputMaybe<ImageFilter>;
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  modified_at?: InputMaybe<DatetimeFilter>;
  published_at?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<PostTagsFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostMutation = {
  authors?: InputMaybe<Array<InputMaybe<PostAuthorsMutation>>>;
  body?: InputMaybe<Scalars['JSON']['input']>;
  categories?: InputMaybe<Array<InputMaybe<PostCategoriesMutation>>>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<PostTagsMutation>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostTags = {
  __typename?: 'PostTags';
  tag?: Maybe<PostTagsTag>;
};

export type PostTagsFilter = {
  tag?: InputMaybe<PostTagsTagFilter>;
};

export type PostTagsMutation = {
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type PostTagsTag = Tag;

export type PostTagsTagFilter = {
  tag?: InputMaybe<TagFilter>;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authorConnection: AuthorConnection;
  blog: Blog;
  blogConnection: BlogConnection;
  category: Category;
  categoryConnection: CategoryConnection;
  collection: Collection;
  collections: Array<Collection>;
  document: DocumentNode;
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  home: Home;
  homeConnection: HomeConnection;
  legal_document: Legal_Document;
  legal_documentConnection: Legal_DocumentConnection;
  node: Node;
  post: Post;
  postConnection: PostConnection;
  tag: Tag;
  tagConnection: TagConnection;
  translation_metadata: Translation_Metadata;
  translation_metadataConnection: Translation_MetadataConnection;
};


export type QueryAuthorArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlogArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlogConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlogFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryHomeArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HomeFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLegal_DocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLegal_DocumentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Legal_DocumentFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslation_MetadataArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslation_MetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Translation_MetadataFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type RichTextFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  collection: Collection;
  extension: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  hasReferences?: Maybe<Scalars['Boolean']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  template: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Tag = Document & Node & {
  __typename?: 'Tag';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type TagConnection = Connection & {
  __typename?: 'TagConnection';
  edges?: Maybe<Array<Maybe<TagConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type TagConnectionEdges = {
  __typename?: 'TagConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Tag>;
};

export type TagFilter = {
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type TagMutation = {
  description?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Translation_Metadata = Document & Node & {
  __typename?: 'Translation_metadata';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  translations?: Maybe<Array<Maybe<Translation_MetadataTranslations>>>;
};

export type Translation_MetadataConnection = Connection & {
  __typename?: 'Translation_metadataConnection';
  edges?: Maybe<Array<Maybe<Translation_MetadataConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type Translation_MetadataConnectionEdges = {
  __typename?: 'Translation_metadataConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Translation_Metadata>;
};

export type Translation_MetadataFilter = {
  translations?: InputMaybe<Translation_MetadataTranslationsFilter>;
};

export type Translation_MetadataMutation = {
  translations?: InputMaybe<Array<InputMaybe<Translation_MetadataTranslationsMutation>>>;
};

export type Translation_MetadataTranslations = {
  __typename?: 'Translation_metadataTranslations';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Translation_MetadataTranslationsValue>;
};

export type Translation_MetadataTranslationsFilter = {
  key?: InputMaybe<StringFilter>;
  value?: InputMaybe<Translation_MetadataTranslationsValueFilter>;
};

export type Translation_MetadataTranslationsMutation = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Translation_MetadataTranslationsValue = Post;

export type Translation_MetadataTranslationsValueFilter = {
  post?: InputMaybe<PostFilter>;
};
