import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { map } from "rxjs/internal/operators/map";
import { Post } from "../models/post.model";
import { CONFIGS } from "../utility/confige";
import { Observable } from "rxjs";
import { ApiResponseModel } from "../models/ApiResponse.model";

@Injectable()
export class PostService{
    constructor(private _apiService:ApiService){

    }
    // get List of post
    getPostList(){        
        return this._apiService
          .getData<ApiResponseModel>(`${CONFIGS.POST_LIST_URL}`)
          .pipe(
            map(data => {
              return data
            })
          );
      }
      // get details of the post
    getPostDetail(id){        
        return this._apiService
          .getData<ApiResponseModel>(`${CONFIGS.POST_LIST_URL}/${id}`)
          .pipe(
            map(data => {
              console.log(data)
              return data
            })
          );
      }
      // create a new post
      createPost(post:Post):Observable<Post>{
        return this._apiService.postData<Post>(`${CONFIGS.POST_LIST_URL}`,post)
        .pipe(
            map(data => {
              return data
            })
          );
      }
      // upload image
      uploadImagePost(image:FormData,id:string):Observable<File>{
      
        return this._apiService.uploadImage<File>(`/posts/${id}/picture`,image)
        .pipe(
            map(data => {
              return data
            })
          );
      }
    
}