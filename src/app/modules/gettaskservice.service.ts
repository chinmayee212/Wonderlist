import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/todos';

@Injectable({
  providedIn: 'root'
})
export class GettaskserviceService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }

  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data){
    return this.http.post(baseUrl, data);
  }
  update(id, data){
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id){
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
  shopping(){
    return this.http.get('http://localhost:3000/api/todos/label');
  }
  others(){
    return this.http.get('http://localhost:3000/api/todos/others');
  }
  personal(){
    return this.http.get('http://localhost:3000/api/todos/personal');
  }
  work(){
    return this.http.get('http://localhost:3000/api/todos/work');
  }
  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
