import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  private inputTag:string;
  private postForm;
  hassTagError:boolean=false;
  hassImageError:boolean=false;
  
  constructor(private _postService:PostService,private router:Router,private formBuilder: FormBuilder,

    ) { }

  ngOnInit() {
    // create form
    this.postForm = this.formBuilder.group({
      title:['',Validators.required],
      dsc:['']
    })
  }
  markFormGroupTouched(formGroup: FormGroup) {
    // for validation , tuching every control when form submited
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  public createPost():void{
    // touch controls
    this.markFormGroupTouched(this.postForm)
    // fill tags
    this.post.tags = this.tagList;
    // set title an dsc
    this.post.title=this.postForm.controls.title.value;
    this.post.description=this.postForm.controls.dsc.value;
    // check if form is valid
    if(this.postForm.valid ){
      // check if user added at least one tag
      if(this.tagList.length===0){
        this.hassTagError=true;
      }
      // check if user added the photo
      else if(this.selectedFile){
        this.hassImageError=false;

        this.hassTagError=false;
        this._postService.createPost(this.post).subscribe(
          response => {
            // start adding picture
            this.uploadImage(response.id);
          }
          );
      }
      else{
        // set error for add image
        this.hassImageError=true;
      }
     
      }
  }
  public uploadImage(id):void{
    
    const image = new FormData();
    image.append('image',this.selectedFile.file,this.selectedFile.name)
    this.selectedFile.pending=true;

    this._postService.uploadImagePost(image,id).subscribe(data=>{
      this.selectedFile.pending=false;
      this.selectedFile.status="success"
      setTimeout(() => {
        
        this.router.navigate(['/'])
      }, 1500);
    })
  }
  public addTag():void{
    if (this.inputTag && !this.tagList.includes(this.inputTag.toString())) {
        this.tagList.push(this.inputTag.toString());
    }
    this.inputTag='';

  }

  public deleteTag(element:string):void{
    var currentTag = this.tagList.findIndex(a=>a===element);
    this.tagList.splice(currentTag,1)
  
  }
 
  public fileSelected(event:any):void{
    this.hassImageError=false;
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

    this.selectedFile.name=file.name;
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
