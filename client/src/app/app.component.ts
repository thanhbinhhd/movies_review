import { AfterViewInit, Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  // FIXME:テストを追加する
  /* istanbul ignore next */
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#adb5bd';
  }
  title = 'movie-reviews';
}
