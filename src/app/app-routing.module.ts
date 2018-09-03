import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TestComponent } from './test/test.component';
import { GenCodeComponent } from './gen-code/gen-code.component';
import { FormUiComponent } from './form-ui/form-ui.component';

const routes: Routes = [
  {path: '', component: TestComponent, pathMatch: 'full'},
  {path: 'material-design', component: TestComponent},
  {path:'test-route', component: TestComponent},
  {path: 'forms-component', component: GenCodeComponent},
  {path: 'forms-component-1', component: FormUiComponent}
];//-- routes

// https://stackblitz.com/edit/dynamic-nested-sidenav-menu?file=app%2Fapp-routing.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
