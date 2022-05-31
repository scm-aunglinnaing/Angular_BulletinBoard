import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.get(url);
  }

  geAllPost(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.get(url);
  }
  
  getPostDetail(postId: number): Observable<any> {
    const url = this.apiUrl + '/posts/' + postId;
    return this.http.get(url);
  }

  async getListDetail(postId: number): Promise<object> {
    const url = this.apiUrl + '/posts/' + postId;
    console.log(postId);
    return await this.http.get(url);
  }

  createPost(data: any): Observable<any> {
    const url = this.apiUrl + '/posts';
    return this.http.post(url, data);
  }

  updatePost(data: any, postId: any): Observable<any> {
    const url = this.apiUrl + '/posts/' + postId;
    return this.http.put(url, data);
  }

}
