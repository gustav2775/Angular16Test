import { Injectable, computed, signal } from "@angular/core";
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable()
export class TestSignalService {
  public signal = signal('TESTTTTTTTT TEXT')
  public signal$ = toObservable(this.signal)

  constructor() {
    setTimeout(() => {
      this.signal.set('Updated Signal')
    }, 2000);
  }
}
