import { WidgetService } from './../widget.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() data;
  @Input() canDelete = false;
  @Input() index;
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
  }

  removeWidget() {
    this.widgetService.removeWidget(this.index);
  }
}
