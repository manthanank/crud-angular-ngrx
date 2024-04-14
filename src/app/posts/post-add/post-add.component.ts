import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { addPost } from '../../store/post.actions';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.scss',
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.postForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      this.store.dispatch(addPost({ post: newPost }));
      this.router.navigate(['/posts']); // Redirect to posts page after adding
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
