import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor() { }
  htmlContent='';
  firebaseVideoUrl = 'https://firebasestorage.googleapis.com/v0/b/agripure-678b4.appspot.com/o/Comp%202.mp4?alt=media&token=5d0a2c99-fdad-4d69-b3d0-59d297d5dee3';
  ngOnInit(): void {
  }

}
