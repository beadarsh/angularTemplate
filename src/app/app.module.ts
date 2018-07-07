import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenCodeComponent } from './gen-code/gen-code.component';
import { UpdateOnFlyGithubComponent } from './update-on-fly-github/update-on-fly-github.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    StackblitzComponent,
    GenCodeComponent,
    UpdateOnFlyGithubComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,    
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
