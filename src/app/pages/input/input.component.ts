import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @ContentChild('input') input:ElementRef;

 
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
     this.input.nativeElement.addEventListener('click',()=>{
      alert()
     })
    
   }
}
