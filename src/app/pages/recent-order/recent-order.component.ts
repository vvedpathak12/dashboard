import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.css']
})
export class RecentOrderComponent implements OnInit {
  recentOrderArr: any[] = [];
  newUsersArr: any[] = [];
  isBtnSelected: boolean[] = [];

  constructor(private _dashboardSrv: DashboardService, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadRecentOrder();
    this.lineChart();
    this.renderBarChart();
    this.pieChart();
  }

  loadRecentOrder() {
    this._dashboardSrv.getDashboardData().subscribe((res: any) => {
      this.recentOrderArr = res.recent_orders;
      this.newUsersArr = res.new_users;
    });
  }

  selectButton(index: number) {
    this.isBtnSelected = this.isBtnSelected.map(() => false);
    this.isBtnSelected[index] = true;
  }

  lineChart() {
    const data = new Chart("lineChart", {
      type: "line",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          label: 'Stats',
          data: [0, 10, 20, 30, 40, 50],
          fill: false,
          borderColor: '#8B9AE6',
          tension: 0.1
        }]
      }
    });
  }

  renderBarChart() {
    const myChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Income',
          data: [60, 150, 90, 45, 35, 100, 40, 10, 70, 160, 90, 80],
          backgroundColor: [
            '#8B9AE6'
          ],
          borderColor: [
            '#8B9AE6'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 200,
            ticks: {
              stepSize: 50,
              callback: function (value) {
                return value.toString();
              }
            }
          }

        }
      }
    });
  }

  pieChart() {
      const data = new Chart("doughnut", {
        type: "doughnut",
        data: {
          labels: ['Men', 'Electronics', 'Women'],
          datasets: [{
            label: 'Count',
            data: [30, 25, 25,10,10],
            backgroundColor: [
              '#3D5BD0',
              '#4F6EE2',
              '#6984EF',
              '#7D95F6',
              '#8FA5FB'
            ],
            hoverOffset: 4
          }]
        }

      });
  }
}

