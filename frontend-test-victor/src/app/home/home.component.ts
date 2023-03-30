import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("productCarousel") productCarousel: any;
  currentProduct: number = 0;
  showShopOptions: boolean = false;

  showToast: boolean = true;

  customOptionsPosts: OwlOptions = {
    center: true,
    loop: true,
    responsive: {
      375: {
        center: true,
        items: 1.3,
        loop: true,
      },
      400: {
        center: true,
        items: 1.4,
        loop: true,
      },
      1000: {
        items: 4,
      }
    }
  }


  posts: any = [];

  products: any = [];

  customOptionsProducts: OwlOptions = {
    center: true,
    loop: true,
    nav: false,
    dots: false,
    pullDrag: false,
    mouseDrag: false,
    touchDrag: false,
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
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  emailSuccess: boolean;

  constructor(
    private snackbar: MatSnackBar,
    private homepageService: HomepageService
  ) { }

  ngOnInit(): void {
    let toast = localStorage.getItem('showToast');
    
    this.showToast = toast === 'false' ? false : true;

    this.products = this.homepageService.getProducts();
    this.posts = this.homepageService.getPosts();
  }

  closeToast() {
    this.showToast = false;
    localStorage.setItem('showToast', "false");
  }

  register() {
    if(!this.registerForm.valid) {
      this.snackbar.open("Formulário inválido.", '', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: "snack-bar-danger"
      });

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

  handleShopSubmenu() {
    this.showShopOptions = !this.showShopOptions;
  }

  menuClosed() {
    this.showShopOptions = false;
  }
}
