import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showToast: boolean = true;

  customOptionsPosts: OwlOptions = {
    center: true,
    loop: true,
    responsive: {
      1000: {
        items: 4,
      }
    }
  }


  posts: any = [
    {
      imageSrc: "../../../assets/images/post1.png",
      username: "caroll_cassis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      imageSrc: "../../../assets/images/post2.png",
      username: "bypalomasoares",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      imageSrc: "../../../assets/images/post3.png",
      username: "carolaine_moreira",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      imageSrc: "../../../assets/images/post4.png",
      username: "thaysnrezende",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },
    {
      imageSrc: "../../../assets/images/post5.png",
      username: "laissaorsano",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pretium sed dis eu pretium sapien nisl neque tincidunt."
    },

  ]

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
