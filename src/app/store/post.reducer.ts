import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { Post, Posts } from '../models/post';

export interface PostState {
  posts: Posts[];
  selectedPost: Post | null;
  error: any;
}

export const initialState: PostState = {
  posts: [],
  selectedPost: null,
  error: null,
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    error: null,
  })),
  on(PostActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostActions.addPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
    error: null,
  })),
  on(PostActions.addPostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostActions.updatePostSuccess, (state, { post }) => {
    const updatedPosts = state.posts.map((p) => (p.id === post.id ? post : p));
    return {
      ...state,
      posts: updatedPosts,
      error: null,
    };
  }),
  on(PostActions.updatePostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostActions.deletePostSuccess, (state, { id }) => ({
    ...state,
    posts: state.posts.filter((post) => post.id !== id),
    error: null,
  })),
  on(PostActions.deletePostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostActions.getPostByIdSuccess, (state, { post }) => ({
    ...state,
    selectedPost: post,
    error: null,
  })),
  on(PostActions.getPostByIdFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
