import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private _service: ProductsService,
    private _commentService: CommentService
  ) {}

  arrivals = this._service.arrivals;

  topRatings = this._service.topRatings;

  comments: any;

  ngOnInit() {
    this._commentService.getComments().subscribe((data) => {
      this.comments = data;
      this.comments = this.comments.comments;
    });
  }
}
