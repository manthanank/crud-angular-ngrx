import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListModule } from './post-list/post-list.module';

// Define your routes here
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./post-list/post-list.module').then(m => m.PostListModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PostsModule { }
