import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private service: PostService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  title: string = "App POST";

  post: Post[] = [];

  getAll(): void {
    this.service.getAll().subscribe((data: Post[]) => {
      this.post = data;
      console.log(data);
    });
  }


}
