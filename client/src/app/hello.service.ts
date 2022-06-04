import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "applicaiton/json",
    "Accept": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private helloUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  async getFoo() {
    return await lastValueFrom(this.http.get(`${this.helloUrl}/hello`));
  }
}
