import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'posts/add',
    component: PostAddComponent,
  },
  {
    path: 'posts/edit/:id',
    component: PostEditComponent,
  },
  {
    path: 'posts/details/:id',
    component: PostDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
