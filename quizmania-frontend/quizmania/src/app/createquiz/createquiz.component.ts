import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { Http, Response, RequestOptions, Headers } from '@angular/http';import { Observable } from 'rxjs/Observable'; //Observable from rxjs library
import { Router } from '@angular/router'

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})

export class CreateQuizComponent {

	private endURL="http://localhost:4200/quizmania/examiner/quiz";
	
	category = ['Psychology', 'Sociology', 'Philosophy', 'Arts & Culture', 'History', 'Geography', 'Biology', 'Physics', 'Chemistry', 'English', 'Linguistics', 'Engineering', 'Computer Science!', 'Math', 'Statistics'];
  
 	model = new Quiz('Ancient History', 25, 'History', 'draft'); 
  
  	submitted = false; 
  	valid = false;
  	errorMsg = "";
  
	onSubmit(): Promise<any> {
		console.log("hmm...", this.submitted, this.valid);
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		
		let options = new RequestOptions({
			headers: headers
		});
		
		this.submitted = true;
		return this.http.post(this.endURL, this.model, options)
			.toPromise()
			.then((good: Response) => {
				console.log("good!");
				this.valid = true;
				return good.json; 
			})
			.catch((error: Response | any) => {
				console.log("error!");
				console.log(error);
				return Promise.reject(error);
			});
	}
	  	
  	newQuiz() {
  		this.submitted = false;
  		this.valid = false;
  		this.model = new Quiz('', 15, '', 'draft');
  		//console.log("reset quiz...");
  	}
  
  	// testing... 
  	get diagnostic() { return JSON.stringify(this.model); }
  
  	//constructor() { } 
    constructor(private http: Http, private router: Router) { }

  	ngOnInit() {}

}
