import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  private post:Post = new Post();
  private tagList: Array<string> = [];
  selectedFile: ImageSnippet;
  private imageUrl='';
  private inputTag='';
  constructor(private _postService:PostService,    private router:Router
    ) { }

  ngOnInit() {
  }
  public createPost():void{
    this.post.tags = this.tagList;
    this._postService.createPost(this.post).subscribe(
      response => {
        debugger
        this.uploadImage(response.id);
      }
    );
  }
  public uploadImage(id):void{
    const image = new FormData();
    image.append('image',this.selectedFile.file,this.selectedFile.name)
    this._postService.uploadImagePost(image,id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/'])
    })
  }
  public addTag():void{
    if (!this.tagList.includes(this.inputTag.toString())) {
        this.tagList.push(this.inputTag.toString());
    }
    this.inputTag='';

  }

  public deleteTag(element:string):void{
    var currentTag = this.tagList.findIndex(a=>a===element);
    this.tagList.splice(currentTag,1)
    // var CurrentList = this.tagList.filter(function (el) {
    //     return el != element;
    // });

    // this.tagList = CurrentList;
  }
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  public fileSelected(event:any):void{
    // this.selectedFile = <File>event.target.files[0];
    // this.imageUrl= URL.createObjectURL(this.selectedFile);

    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
    this.selectedFile.status = 'ok';
    this.selectedFile.name=file.name;

    //   this.imageService.uploadImage(this.selectedFile.file).subscribe(
    //     (res) => {
    //       this.onSuccess();
    //     },
    //     (err) => {
    //       this.onError();
    //     })
    });

    reader.readAsDataURL(file);
  }
}
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  name:string = '';

  constructor(public src: string, public file: File) {}
}
