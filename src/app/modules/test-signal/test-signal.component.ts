import { Component, ChangeDetectionStrategy, computed, effect, signal } from '@angular/core';
import { TestSignalService } from './test-signal.service';

@Component({
  selector: 'test-signal',
  templateUrl: './test-signal.component.html',
  styleUrls: ['./test-signal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSignalComponent {
  public signal = signal('Test-signal')
  public titleSignal = computed(() =>  this.signal() + ' Component ');

  public signalService = this.service.signal;
  public signalService$ =  this.service.signal$;

  public computedSignal = computed(() => ' Computed ' + this.signalService());

  constructor(private service: TestSignalService) {
    this.configureEffectSignalTitle(); //only constructor
    this.configureEffectSignalService();
    this.configureEffectTimeoutSignalService(); //tik one
    this.configureCombineSingle();
  }

  public valueChange(v: string): void {
    // this.signalService.set(v)
    this.signalService.update(() => v);
    // this.signalService.mutate(() => v)
  }

  public titleChange(t:string): void {
    this.signal.set(t)
  }

  private configureEffectSignalTitle(): void {
    effect(() => {
      console.log(`SignalTitle`, this.titleSignal());
    });
  }

  private configureEffectSignalService(): void {
    effect(() => {
      console.log(`EffectSignal`, this.signalService());
    });
  }

  private configureEffectTimeoutSignalService(): void {
    effect((onClean) => {
      const timer = setTimeout(() => console.log(`EffectSignal Timeout`, this.signalService()), 1000);

      onClean(() => clearTimeout(timer))
    });
  }

  private configureCombineSingle(): void {
    effect(() => {
      console.log(`CombineSignal`, this.signalService(), this.titleSignal());
    });
  }
}
