import { Component, OnInit } from '@angular/core';
import {JokesService} from './jokes.service';

@Component({
  selector: 'app-chuck-norris-page',
  templateUrl: './chuck-norris-page.component.html',
  styleUrls: ['./chuck-norris-page.component.css'],
  providers: [JokesService]
})
export class ChuckNorrisPageComponent implements OnInit {
  title: "Jokes";
  currentJoke: string = '';
  constructor(private theService: JokesService) { }

  ngOnInit() {
    this.getRandomJoke()
  }

  getRandomJoke(){
    this.theService.getRandom()
    .then((result) => {
      console.log('RANDOM AJAX');
      console.log(result);
      this.currentJoke = result.value.joke;
    })
    .catch((err) => {
      console.log('Broke Ass Code!');
      console.log(err);
      this.currentJoke = "Janky Code. Try Again."
    });
  }

}
