import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { getPostById } from '../../store/post.actions';
import { inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {
  post$: Observable<Post | null>;

  router = inject(ActivatedRoute);

  constructor(private store: Store<State>) {
    this.post$ = this.store.select((state) => state.post.selectedPost);
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(getPostById({ id }));
    });
  }
}