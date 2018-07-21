import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenCodeComponent } from './gen-code/gen-code.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TestComponent } from './test/test.component';


// Nav service
import { MyNavComponent } from './my-nav/my-nav.component';
import { NavItemComponent } from './my-nav/nested-components/nav-item/nav-item.component';
import { NavService } from './my-nav/nav.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavToolbarComponent } from 'src/app/my-nav/nested-components/nav-toolbar/nav-toolbar.component';
import { FormUiComponent } from 'src/app/form-ui/form-ui.component';



@NgModule({
  declarations: [
    AppComponent,
    StackblitzComponent,
    GenCodeComponent,
    TestComponent,
    MyNavComponent,
    NavItemComponent,
    NavToolbarComponent,
    FormUiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
