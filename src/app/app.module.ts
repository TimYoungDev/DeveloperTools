import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'node_modules/ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { HashcodeComponent } from './hashcode/hashcode.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchItemComponent } from './search/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HashcodeComponent,
    SearchComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
