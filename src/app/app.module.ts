import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PaisComponent } from './pais/pais.component';
import {PaisService} from './pais.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
