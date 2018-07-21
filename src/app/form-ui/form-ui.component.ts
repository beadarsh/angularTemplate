import { Component, OnInit } from '@angular/core';
// Must import to use Forms functionality
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-ui',
    templateUrl: './form-ui.component.html',
    styleUrls: ['./form-ui.component.scss']
})
export class FormUiComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    onFormSubmit(formValue:String) {

    }
}
