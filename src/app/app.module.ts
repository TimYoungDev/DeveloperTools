import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'node_modules/ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { HashcodeComponent } from './hashcode/hashcode.component';

@NgModule({
  declarations: [
    AppComponent,
    HashcodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
