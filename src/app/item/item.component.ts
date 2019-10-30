import { Component, OnInit } from '@angular/core';
import { QuoteService} from '../quote.service';
import Quote from "../quote"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  Quote:Quote;

  constructor(private quoteService:QuoteService) { 
    this.Quote=quoteService.getQuote();
    console.log(this.Quote);
  }

  ngOnInit() {
  }

}
