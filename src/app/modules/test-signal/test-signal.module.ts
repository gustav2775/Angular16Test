import { TestSignalService } from './test-signal.service';
import { NgModule } from '@angular/core';
import { TestSignalComponent } from './test-signal.component';
import { TestSignalRouterModule } from './test-signal.router.module';
import { CommonModule } from '@angular/common';
import { ChildInputComponent } from './components/child-input/child-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestSignalComponent, ChildInputComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    TestSignalRouterModule
  ],
  providers: [TestSignalService],
})
export class TestSignalModule { }
