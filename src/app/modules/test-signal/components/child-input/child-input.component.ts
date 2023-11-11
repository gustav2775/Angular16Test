import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildInputComponent {
  public focused = false;

  @Input() public label?:string = 'Введите значение';
  @Input() public set value(v: string) {
    if(!!v) {
      this.control.setValue(v);
    }
  };

  public control = new FormControl(this.value, Validators.required)

  @Output() public valueChange = this.control.valueChanges.pipe(map(v => v ?? ''))

  public toggleFocused(v: boolean): void {
    this.focused = v;
  }
}
