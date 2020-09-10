import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"post/new",component:PostCreateComponent}
    ])
  ],
  providers:[],
  bootstrap:[PostCreateComponent],
  declarations: [PostCreateComponent],
})
export class PostCreatModule { }
