import { Component, OnInit } from '@angular/core';
// Must import to use Forms functionality
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl } from '@angular/forms';
//import { GhFormService } from './delete-page.service';
import { GhFormService } from './gh-form.service';
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

@Component({
    // selector: 'gh-form',
    // templateUrl: './gh-form.html',
    // styleUrls: ['./gh-form.component.scss']
    selector: 'gh-form',
    templateUrl: 'gh-form.component.html',
    styleUrls: ['gh-form.component.scss'],
    providers: [GhFormService]
})
export class GhFormComponent implements OnInit
{
    form: FormGroup;
    initialData: any;
    constructor(private fb: FormBuilder, private initialDataService: GhFormService)
    {
        this.initialData = this.initialDataService.fetchInitialData();
    }



    ngOnInit()
    {
        this.form = this.fb.group({
            'firstName': ['', [Validators.required]]
            , 'lastName': ['', [Validators.required]]
            , 'percentValue': ['', [Validators.required]]
            , 'carModel': ['', [Validators.required]]
            , 'acProperty': ['', [Validators.required]]
            , 'address': ['', [Validators.compose([Validators.required, Validators.minLength(40)])]]
            , 'email': ['', [Validators.required]]
            , 'dob': ['', [Validators.required]]
            , 'gender': ['', [Validators.required]]
            , 'agreeToTerms': ['', [Validators.required]]
            , 'submit': ['', []]
        });

        this.form.addControl('acPropertyObject', new FormControl([]));
        this.acPropertyfilteredItems = this.form.get('acPropertyObject').valueChanges.pipe(startWith(this.initialData.acPropertyItems),
            map((name: string) => name ? this.filterItem(this.initialData.acPropertyItems, 'name', name) : this.initialData.acPropertyItems)
        );
        // this.form.patchValue({'acPropertyObject': this.initialData.acPropertyItems.find(x => x.id === this.property)});
    }

    onFormSubmit(formValue: String)
    {

    }

    acPropertyfilteredItems: Observable<any>;

    filterItem(list: any[], propertyName: string, val: string): any[]
    {

        if (typeof (val) !== 'string') {
            val = '';
        }
        if (!val) {
            return list;
        }
        try {
            return list.filter(s => s[propertyName].includes(val));
        } catch (e) {
            return list;
        }

    }

    displayName(item: any): string
    {
        return item ? item.name : null;
    }
}
