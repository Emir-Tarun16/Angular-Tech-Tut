import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  onHandleIncrease = () => {
    if(this.count === 11){
      return;
    }
    this.count = this.count + 1;
    console.log("increse is working")
  }

  onHandleDecrease = () => {
    if(this.count === 0){
      return;
    }
    this.count = this.count - 1;
    console.log("decrease is working")
  }

  onHandleReset = () =>{
    this.count = 0;
    console.log("Reset is working")
  }
}
