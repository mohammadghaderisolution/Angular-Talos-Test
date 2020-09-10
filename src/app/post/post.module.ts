import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
  // {path: '', redirectTo:'/postList',pathMatch:'full'},
      
      { path: "postList", component: PostComponent }]),

  ],
  declarations: [PostComponent],
  providers:[ApiService],
  bootstrap:[PostComponent]
})
export class PostModule { }
