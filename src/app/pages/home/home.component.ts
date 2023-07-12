import { Component, HostListener, Renderer2 } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Breakpoints = Breakpoints;
  cols = 0;

  readonly breakpoint$ = this.breakpointObserver
    .observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ])
    .pipe(tap(console.log), distinctUntilChanged());

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.cols = 4;
      return;
    }
    if (
      this.breakpointObserver.isMatched(Breakpoints.Medium) ||
      this.breakpointObserver.isMatched(Breakpoints.Small)
    ) {
      this.cols = 3;
      return;
    }
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.cols = 2;
      return;
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
