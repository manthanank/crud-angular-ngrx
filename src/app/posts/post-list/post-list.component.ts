import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Posts } from '../../models/post';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { deletePost, loadPosts } from '../../store/post.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit{

  posts$: Observable<Posts[]>;

  dataService = inject(DataService);
  router = inject(Router);

  constructor(private store: Store<State>) {
    this.posts$ = this.store.select(state => state.post.posts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  viewPost(id: number) {
    this.router.navigate(['/posts/details', id]);
  }

  addPost() {
    this.router.navigate(['/posts/add']);
  }

  deletePost(id: number) {
    this.store.dispatch(deletePost({ id }));
  }

  editPost(id: number) {
    this.router.navigate(['/posts/edit', id]);
  }
}
