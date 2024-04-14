import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ActivatedRoute } from '@angular/router';
import { getPostById } from '../../store/post.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
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
