import { Injectable, computed, signal } from "@angular/core";
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable()
export class TestSignalService {
  public signal = signal('Content Signal')
  public signal$ = toObservable(this.signal)

  constructor() {
    setTimeout(() => {
      this.signal.set('Updated Content Signal')
    }, 2000);
  }
}
