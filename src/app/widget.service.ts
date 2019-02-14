import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  public widgetObservable = new BehaviorSubject<Object>(null);
  public widgetList = [];
  constructor(private httpClient: HttpClient) {}

   getLocation(lat: number, lon: number) {
     return this.httpClient.get(
       `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=b50fbebb085018da21f5e0e27c8183e4`,
       );
   }

   addWidget(data) {
     this.widgetList.unshift(JSON.parse(JSON.stringify(data)));
     this.widgetObservable.next(this.widgetList);
   }

   removeWidget(index) {
     this.widgetList.splice(index, 1);
   }
}
