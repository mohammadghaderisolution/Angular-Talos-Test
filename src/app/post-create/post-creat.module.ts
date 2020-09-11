import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {path:"post/new",component:PostCreateComponent}
    ])
  ],
  providers:[],
  bootstrap:[PostCreateComponent],
  declarations: [PostCreateComponent],
})
export class PostCreatModule { }
