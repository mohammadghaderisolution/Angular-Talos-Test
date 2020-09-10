import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-datail',
  templateUrl: './post-datail.component.html',
  styleUrls: ['./post-datail.component.scss']
})
export class PostDatailComponent implements OnInit {
  post:Post;
  constructor(private _postService:PostService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this._postService.getPostDetail(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
      this.post=data;
    })

  }

}
