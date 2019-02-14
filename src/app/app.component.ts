import { WidgetService } from './widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  widgetList = [] as any;
  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgetService.widgetObservable.subscribe((data) => {
      this.widgetList = data;
    });
  }
}
