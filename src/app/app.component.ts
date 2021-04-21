import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import CountryWords from "../utils/countries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordgen-app';

  word = '';
  countryword = '';
  limit = 10;

  handleSlideChange = (newLimit: number) => {
      this.limit = newLimit;
  }

  generator = () =>{
    this.word = arrayWords.slice(0, this.limit).join(' ');
  }

  countryGenerator = () =>{
    console.info("countries function working")
    this.countryword = CountryWords.slice(0,this.limit).join(' ');
  }
}
