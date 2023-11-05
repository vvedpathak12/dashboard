import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideBarToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideBarToggled.emit(this.menuStatus);
  }

}
