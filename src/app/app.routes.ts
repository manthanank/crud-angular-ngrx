import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts',
    },
    {
        path: 'posts',
        loadComponent: () => import('./posts/post-list/post-list.component').then((m) => m.PostListComponent),
    },
    {
        path: 'posts/add',
        loadComponent: () => import('./posts/post-add/post-add.component').then((m) => m.PostAddComponent),
    },
    {
        path: 'posts/details/:id',
        loadComponent: () => import('./posts/post-details/post-details.component').then((m) => m.PostDetailsComponent),
    },
    {
        path: 'posts/edit/:id',
        loadComponent: () => import('./posts/post-edit/post-edit.component').then((m) => m.PostEditComponent),
    },
    {
        path: '**',
        redirectTo: 'posts',
    },
];
