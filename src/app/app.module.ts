import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';


import { AppComponent } from './app.component';
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenCodeComponent } from './gen-code/gen-code.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { NumberComponent } from './shared/number-component/number.component';

// Nav service
import { AppRoutingModule } from './app-routing.module';
import { FormUiComponent } from './form-ui/form-ui.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { GhFormComponentTest } from './delete-page/gh-form.component';
//import { DeletePageComponent } from './delete-page/gh-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StackblitzComponent,
    GenCodeComponent,
    TestComponent,
    //MyNavComponent,
    //NavItemComponent,
    //NavToolbarComponent,
    FormUiComponent,
    DatePickerComponent,
    NumberComponent,
    NumberComponent,
    GhFormComponentTest
    //DeletePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    TextMaskModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
