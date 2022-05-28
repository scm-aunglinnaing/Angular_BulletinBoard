import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostConfirmComponent } from './posts/post-confirm/post-confirm.component';

//resolver
import { PostResolver } from './resolver/post.resolver';

const routes: Routes = [
  { path: 'post', component: PostCreateComponent },
  { path: 'post/:id', component: PostCreateComponent, resolve: { post: PostResolver } },
  { path: 'post-confirm', component: PostConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
