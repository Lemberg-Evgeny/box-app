//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components & pages
import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';

//services
import { HttpService } from './services/http.service';
import { WebsocketService } from './services/websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
