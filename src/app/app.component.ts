import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent implements OnInit {
  	title = 'Angular 5 Firebase Tutorial';
	user = {};
  	users: FirebaseListObservable<any[]>;

  	constructor(private db: AngularFireDatabase) {}

  	//Get the data from firebase
  	ngOnInit() {
  		this.users = this.db.list('/users');
  	}
  	//Save data to firebase
  	onSubmit() {
  	   	this.users.push(this.user);
    	this.user = {};
  	}
}
