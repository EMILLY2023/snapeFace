import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

title!: string;
description!: string;
createdDate!: Date;
snaps!: number;
imageUrl!: string;
ngOnInit(){
  this.title = 'Adam et Aya';
  this.description= 'Mes enfants sont gentilles';
  this.createdDate= new Date();
  this.snaps= 10;
  this.imageUrl= 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.clicbienetre.com%2Fprod%2F2019-10%2Fenfants-qui-mangent-devant-l-ecran-2.jpg&tbnid=9j3vRURGFR5JIM&vet=12ahUKEwi_j5atpbCEAxVqQaQEHXKnDLcQMygWegUIARCJAQ..i&imgrefurl=https%3A%2F%2Fwww.clicbienetre.com%2Fmaman%2Fenfant%2Fun-enfant-sur-trois-mange-devant-un-ecran&docid=RRauR3_5fnLr2M&w=420&h=340&q=image%20enfants%20qui%20mangent&ved=2ahUKEwi_j5atpbCEAxVqQaQEHXKnDLcQMygWegUIARCJAQ';
}
}
