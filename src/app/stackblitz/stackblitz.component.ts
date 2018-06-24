import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URLSearchParams} from '@angular/http';

// Create the project payload.
const project = {
  files: {
    'index.html': `<h2>Hello there!</h2>`,
    'index.ts': `// I'm empty.`,
    'randomFile.ts': '// You should delete me.'
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  tags: ['stackblitz', 'sdk']
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


// Embed this project
window['embedNewProject'] = () => {

  

}

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.css']
})
export class StackblitzComponent implements OnInit {

  apiRoot: string = "http://localhost:3000"; 
  responseData = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getFiles() {
    console.log("GET");
    let url = `${this.apiRoot}/getemployee`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    return this.http.get(url); 
  }

  getGeneratedFiles() {
       this.getFiles().subscribe(
          data => { 
            this.responseData = data;
          },
          err => { 
            console.error(err);
          },
          () => {
            console.log('done loading foods');
          }
        );
  }

  createFood(food) {
            let body = JSON.stringify(food);
            return this.http.post('/api/food/', body, httpOptions);
  }

}
