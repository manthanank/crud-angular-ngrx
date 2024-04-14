import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostActions from './post.actions';
import { DataService } from '../Services/data.service';
import { Post } from '../models/post';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() =>
        this.dataService.getPosts().pipe(
          map((posts) => PostActions.loadPostsSuccess({ posts })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap(({ post }) =>
        this.dataService.createPost(post).pipe(
          map((newPost: Post) => PostActions.addPostSuccess({ post: newPost })),
          catchError((error) => of(PostActions.addPostFailure({ error })))
        )
      )
    )
  );

  getPostById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPostById),
      mergeMap(({ id }) =>
        this.dataService.getPostById(id).pipe(
          map((post: Post) => PostActions.getPostByIdSuccess({ post })),
          catchError((error) => of(PostActions.getPostByIdFailure({ error })))
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.updatePost),
      mergeMap(({ post }) =>
        this.dataService.updatePost(post).pipe(
          map((updatedPost: Post) =>
            PostActions.updatePostSuccess({ post: updatedPost })
          ),
          catchError((error) => of(PostActions.updatePostFailure({ error })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(({ id }) =>
        this.dataService.deletePost(id).pipe(
          map(() => PostActions.deletePostSuccess({ id })),
          catchError((error) => of(PostActions.deletePostFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
