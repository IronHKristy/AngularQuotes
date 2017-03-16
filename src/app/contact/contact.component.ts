import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactId: string;
  constructor(private myRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.myRooute.params.subscribe((params) => this.contactId = Number(params['id']));
    })
  }

}
