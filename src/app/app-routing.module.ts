import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HashcodeComponent } from "./hashcode/hashcode.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
  { path: "hashcode", component: HashcodeComponent },
  { path: "search", component: SearchComponent },
  { path: "**", redirectTo: "hashcode" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
