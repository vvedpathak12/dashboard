import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent implements OnInit {
  topCardsArr: any[] = [];
  iconMapping: { [key: string]: string } = {
    card1: 'fa-music',
    card2: 'fa-pie-chart',
    card3: 'fa-download',
    card4: 'fa-refresh',
  };

  constructor(private _dashboardSrv: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard() {
    this._dashboardSrv.getDashboardData().subscribe((res: any) => {
      this.topCardsArr = res.top_cards;
    });
  }

}
