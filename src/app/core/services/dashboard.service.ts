import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http: HttpClient) { }

  getDashboardData() {
    return this.http.get("https://1.api.fy23ey05.careers.ifelsecloud.com/");
  }
}
