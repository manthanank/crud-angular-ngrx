import { ActionReducerMap } from '@ngrx/store';
import * as fromPost from './post.reducer';

export interface State {
  post: fromPost.PostState;
}

export const reducers: ActionReducerMap<State> = {
  post: fromPost.postReducer,
};