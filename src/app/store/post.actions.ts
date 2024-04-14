import { createAction, props } from '@ngrx/store';
import { Posts, Post } from '../models/post';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction('[Post] Load Posts Success', props<{ posts: Posts[] }>());
export const loadPostsFailure = createAction('[Post] Load Posts Failure', props<{ error: any }>());

export const addPost = createAction('[Post] Add Post', props<{ post: Post }>());
export const addPostSuccess = createAction('[Post] Add Post Success', props<{ post: Post }>());
export const addPostFailure = createAction('[Post] Add Post Failure', props<{ error: any }>());

export const updatePost = createAction('[Post] Update Post', props<{ post: Post }>());
export const updatePostSuccess = createAction('[Post] Update Post Success', props<{ post: Post }>());
export const updatePostFailure = createAction('[Post] Update Post Failure', props<{ error: any }>());

export const deletePost = createAction('[Post] Delete Post', props<{ id: number }>());
export const deletePostSuccess = createAction('[Post] Delete Post Success', props<{ id: number }>());
export const deletePostFailure = createAction('[Post] Delete Post Failure', props<{ error: any }>());

export const getPostById = createAction('[Post] Get Post By Id', props<{ id: number }>());
export const getPostByIdSuccess = createAction('[Post] Get Post By Id Success', props<{ post: Post }>());
export const getPostByIdFailure = createAction('[Post] Get Post By Id Failure', props<{ error: any }>());