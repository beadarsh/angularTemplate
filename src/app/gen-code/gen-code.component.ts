// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gen-code',
//   templateUrl: './gen-code.component.html',
//   styleUrls: ['./gen-code.component.css']
// })
// export class GenCodeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
// Must import to use Forms functionality
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AutocompleteValidator } from '../shared/auto-complete-validator';

@Component({
  selector: 'app-gen-code',
  templateUrl: './gen-code.component.html',
  styleUrls: ['./gen-code.component.css']
})
export class GenCodeComponent implements OnInit {
  form: FormGroup;
  property: number;
  initialData:any;
  filteredItems:Observable<any>;

  constructor(private fb: FormBuilder) {
      this.property = 1;
      this.initialData = {items: [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}, {id: 4, name: 'name 4'}]};
   }



  ngOnInit() {
    this.form = this.fb.group({
      'firstName': ['', [Validators.required]]
      , 'lastName': ['', [Validators.required]]
      , 'carModel': ['', [Validators.required]]
      , 'address': ['', [Validators.compose([Validators.required, Validators.minLength(40)])]]
      , 'email': ['', [Validators.required]]
      , 'dob': ['', [Validators.required]]
      , 'gender': ['', [Validators.required]]
      , 'agreeToTerms': ['', [Validators.required]]
      , 'submit': ['', []]
      , 'price': ['75.65']
      ,'property':[1]
      ,'propertyObject':['', AutocompleteValidator.correctId('id')]
      ,'autoProperty': ['']
      ,'dateProperty': [new Date()]
    });

    this.filteredItems = this.form.get('propertyObject').valueChanges.pipe(startWith(this.initialData.items),
        map((name: string) => name ? this.filterItem(this.initialData.items, 'name', name): this.initialData.items)
    );
    this.setValue();
  }

  setValue() {
    this.form.patchValue({'propertyObject': this.initialData.items.find(x => x.id === this.property)});
   }

  filterItem(list: any[], propertyName: string, val: string) : any[] {
      console.log(val);
      if (typeof (val) !== 'string') {
          val = '';
      }
      if (!val) {
          return list;
      }
      try {
        return list.filter(s => s[propertyName].includes(val));
         //return list.filter(s => new RegExp(`^${val}`, 'i').test(s[propertyName]));
      } catch (e) {
          return list;
      }
  }

  testDate() {
    let yu = new Date(this.form.value.dateProperty);
    let yu1= new Date(this.form.value.dob);
  }

  onFormSubmit(formValue: String) {

  }
  displayName(item: any): string {
    return item ? item.name : null;
  }
}
