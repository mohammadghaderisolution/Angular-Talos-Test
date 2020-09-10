import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { map } from "rxjs/internal/operators/map";
import { Post } from "../models/post.model";
import { CONFIGS } from "../utility/confige";
import { Observable } from "rxjs";

@Injectable()
export class PostService{
    constructor(private _apiService:ApiService){

    }
    getPostList(){        
        return this._apiService
          .getData<Array<Post>>(`${CONFIGS.POST_LIST_URL}`)
          .pipe(
            map(data => {
              console.log(data)
              return data
            })
          );
      }
    getPostDetail(id){        
        return this._apiService
          .getData<Post>(`${CONFIGS.POST_LIST_URL}/${id}`)
          .pipe(
            map(data => {
              console.log(data)
              return data
            })
          );
      }
      createPost(post:Post):Observable<Post>{
        return this._apiService.postData<Post>(`${CONFIGS.POST_LIST_URL}`,post)
        .pipe(
            map(data => {
              console.log(data)
              return data
            })
          );
      }
      uploadImagePost(image:FormData,id:string):Observable<File>{
      
        return this._apiService.uploadImage<File>(`/posts/${id}/picture`,image)
        .pipe(
            map(data => {
              console.log(data)
              return data
            })
          );
      }
    
}