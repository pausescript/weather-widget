import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WidgetEditorComponent } from './widget-editor/widget-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetComponent } from './widget/widget.component';
import { CompassPipe } from './compass.pipe';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WidgetEditorComponent,
    WidgetComponent,
    CompassPipe,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
