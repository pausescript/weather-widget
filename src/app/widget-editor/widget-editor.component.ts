import { WidgetService } from './../widget.service';

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget-editor',
  templateUrl: './widget-editor.component.html',
  styleUrls: ['./widget-editor.component.scss']
})
export class WidgetEditorComponent implements OnInit {

  @ViewChild('widgetForm') form;
  submitted = false;
  weatherInfo = {
    title: '',
    temperature: 'C',
    wind: true,
    additionInfo: null
  };
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
          (position) => {
            this.widgetService.getLocation(
                position.coords.latitude,
                position.coords.longitude).subscribe((data) => {
                  if (data) {
                    this.weatherInfo.additionInfo = data;
                  }
                });
          });
  }

  addWidget(form) {
    this.submitted = true;
    if (!this.weatherInfo.title) {
      return;
    }

    this.widgetService.addWidget(this.weatherInfo);
    this.resetWidget();
  }

  resetWidget() {
    this.form.reset();
    this.submitted = false;
    this.weatherInfo.title = '';
    this.weatherInfo.temperature = 'C';
    this.weatherInfo.wind = true;
  }
}
