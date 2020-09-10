import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './post/post.module';
import { PostDatailComponent } from './post-datail/post-datail.component';
import { PostDetailModule } from './post-datail/post-detail.module';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostCreatModule } from './post-create/post-creat.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes =[
  {path: '', component:PostComponent,pathMatch:'full'},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PostModule,
    PostDetailModule,
    PostCreatModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
