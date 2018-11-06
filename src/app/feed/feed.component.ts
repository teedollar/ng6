import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feed$;

  constructor() { }
  ngOnInit() {}

}
