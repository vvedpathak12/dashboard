import { Component, OnInit } from '@angular/core';
import { DashboardService } from './core/services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  sideBarStatus: boolean = false;
  ngOnInit(): void {
  }


}
