import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../common/category';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  url = 'http://localhost:8080/categories';
  category: Category;
  constructor(private httpClient: HttpClient) {
    this.category = new Category();
  }

  ngOnInit() {}

  save() {
    this.httpClient.post(this.url, this.category).subscribe((response) => {
      console.log('response: ' + response);
    });
  }
}
