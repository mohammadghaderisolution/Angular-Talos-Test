import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDatailComponent } from './post-datail.component';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"post-detail/:id",component:PostDatailComponent}
    ])
  ],
  providers:[ApiService],
  declarations: [PostDatailComponent],
  bootstrap:[PostDatailComponent]
})
export class PostDetailModule { }
