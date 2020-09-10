import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDatailComponent } from './post-datail.component';

describe('PostDatailComponent', () => {
  let component: PostDatailComponent;
  let fixture: ComponentFixture<PostDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
