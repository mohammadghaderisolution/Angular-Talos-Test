import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postList:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPostList().subscribe((data)=>{
      // if response is ok
      if(data.status===200){

        this.postList=data.data;
      }
      else{
        //Errro Message 
      }

    })
  }

}
