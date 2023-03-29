import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("productCarousel") productCarousel: any;
  currentProduct: number = 0;

  showToast: boolean = true;

  customOptionsPosts: OwlOptions = {
    center: true,
    loop: true,
    responsive: {
      0: {
        center: true,
        items: 1.4,
        loop: true,
      },
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

  products: any = [
    {
      title: "Kit Glam Beauty skincare rapidinho",
      originalValue: "999,90",
      currentValue: "999,80",
      index: 0,
      tag: "Proteção",
      imageSrc: "../../../assets/images/product1.png"
    },
    {
      title: "Máscara Glam detox de argila verde",
      originalValue: "999,90",
      currentValue: "999,80",
      index: 1,
      tag: "Hidratação",
      imageSrc: "../../../assets/images/product2.png"
    },
    {
      title: "Espuma de limpeza Glam Beauty cleam 150 ml",
      originalValue: "999,90",
      currentValue: "999,80",
      index: 2,
      tag: "Limpeza",
      imageSrc: "../../../assets/images/product3.png"
    },
    {
      title: "Hidratante com proteção solar 50 g",
      originalValue: "999,90",
      currentValue: "999,80",
      index: 3,
      tag: "Proteção",
      imageSrc: "../../../assets/images/product4.png"
    },
    {
      title: "Água micelar Glam Beauty fresh 200 ml",
      originalValue: "999,90",
      currentValue: "999,80",
      index: 4,
      tag: "Hidratação",
      imageSrc: "../../../assets/images/product5.png"
    },
  ]

  customOptionsProducts: OwlOptions = {
    center: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        loop: false,
        center: false,
        slideBy: 1
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      }
    }
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  emailSuccess: boolean;

  constructor() { }

  ngOnInit(): void {
    let toast = localStorage.getItem('showToast');
    
    this.showToast = toast === 'false' ? false : true;
  }

  closeToast() {
    this.showToast = false;
    localStorage.setItem('showToast', "false");
  }

  register() {
    if(!this.registerForm.valid) {
      alert('erro')
      return;
    }

    this.emailSuccess = true;
  }

  goToNext() {
    if(this.currentProduct == this.products.length - 1) {
      return;
    }

    this.productCarousel.next();
    this.currentProduct++;
  }
  
  goToPrevious() {
    if(this.currentProduct == 0) {
      return;
    }

    this.productCarousel.prev();
    this.currentProduct--;
  }

}
