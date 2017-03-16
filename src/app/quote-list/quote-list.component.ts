import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Array<any> = [
  {
    id: 1,
    text: "I hope he didn’t die. Unless he left a note naming me his successor, then I hope he did die.",
    author: "Bender"
  }, {
    id: 2,
    text: "Have you ever tried simply turning off your TV, sitting down with your child, and hitting them?",
    author: "Bender"
  }, {
    id: 3,
    text: "Blackmail is such an ugly word. I prefer extortion. The ‘x’ makes it sound cool.",
    author: "Bender"
  }, {
    id: 4,
    text: "My story is a lot like yours, only more interesting ‘cause it involves robots.",
    author: "Bender"
  }, {
    id: 5,
    text: "I‘m so embarrassed. I wish everyone else was dead!",
    author: "Bender"
  }, {
    id: 6,
    text: "Delete me",
    author: "Bender"
  }
];
  constructor() { }

  ngOnInit() {
  }
  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (oneQuote) => oneQuote.id !== id
    );
  }
}
