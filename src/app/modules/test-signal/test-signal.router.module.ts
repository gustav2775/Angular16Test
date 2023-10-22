import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSignalComponent } from './test-signal.component';

const routes: Routes = [
  {
    path: '',
    component: TestSignalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSignalRouterModule { }
