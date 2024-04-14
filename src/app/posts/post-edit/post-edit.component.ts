import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById, updatePost } from '../../store/post.actions';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  postId: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
    this.store.select((state) => state.post.selectedPost).subscribe((post) => {
      if (post) {
        this.postId = post.id;
        this.postForm.patchValue(post);
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(getPostById({ id }));
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const updatedPost = {
        id: this.postId,
        ...this.postForm.value
      };
      // Dispatch action to update the post
      this.store.dispatch(updatePost({ post: updatedPost }));
      this.router.navigate(['/posts']); // Redirect to posts page after editing
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
