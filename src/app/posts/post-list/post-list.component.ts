import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../../models/post';
import { DataService } from '../../Services/data.service';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Router } from '@angular/router';
import { deletePost, loadPosts } from '../../store/post.actions';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
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
