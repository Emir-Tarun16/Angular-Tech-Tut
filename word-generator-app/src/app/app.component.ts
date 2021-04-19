import { Component } from '@angular/core';
import arrayWords from "../utils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator-app';

  words = ''

  limit: number = 10;

  handleSlideChange = (newLimit: number) =>{
    this.limit = newLimit;
  }

  generateWords = () =>{
    this.words = arrayWords.slice(0,this.limit).join(' ')
  }

}
