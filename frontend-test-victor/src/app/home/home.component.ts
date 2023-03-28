import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showToast: boolean = true;

  constructor() { }

  ngOnInit(): void {
    let toast = localStorage.getItem('showToast');
    
    this.showToast = toast === 'false' ? false : true;
  }

  closeToast() {
    this.showToast = false;
    localStorage.setItem('showToast', "false");
  }

}
