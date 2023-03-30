import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor() { }

  getPosts() {
    return [
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
  }

  getProducts() {
    return [
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
  }
}
