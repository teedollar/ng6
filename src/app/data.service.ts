import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getUsers() {
  	return this.http.get(this.url+'users');
  }

  getUser(userId) {
  	return this.http.get(this.url+'users/'+userId);
  }

  getPosts() {
  	return this.http.get(this.url+'posts');
  }
}
