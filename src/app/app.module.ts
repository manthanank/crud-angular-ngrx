import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PostEffects } from './store/post.effects';
import { DataService } from './Services/data.service';
import { postReducer } from './store/post.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        post: postReducer,
      },
      {}
    ),
    EffectsModule.forRoot([PostEffects]),
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
