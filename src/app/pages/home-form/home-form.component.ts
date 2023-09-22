import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
 @ViewChild('red') red:ElementRef;
 
  constructor() {
  console.log('const')
   }

  ngOnInit() {
    console.log('ngonint')
   }

   ngAfterViewInit(): void {
    this.red.nativeElement.style.color='red';
    this.red.nativeElement.style.backgroundColor='black'
    
  
   }




}
