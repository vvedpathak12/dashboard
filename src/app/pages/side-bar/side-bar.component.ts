import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() sideBarStatus: boolean = false
  listArr: any[] = [
    {
      id:1,
      name: 'test 1',
      icon: 'fa fa-cube'
    },
    {
      id:2,
      name: 'test 2',
      icon: 'fa fa-bar-chart'
    },
    {
      id:3,
      name: 'test 3',
      icon: 'fa fa-plus-square-o'
    },
    {
      id:4,
      name: 'test 4',
      icon: 'fa fa-check'
    },
    {
      id:5,
      name: 'test 5',
      icon: 'fa fa-cog'
    },
    {
      id:6,
      name: 'test 6',
      icon: 'fa fa-download'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
