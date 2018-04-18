import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module"

import { CategoryChartOverviewComponent } from "./category-chart-overview-sample.component"

@NgModule({
  declarations: [
    CategoryChartOverviewComponent
  ],
  imports: [
    BrowserModule, FormsModule, IgxCategoryChartModule
  ],
  providers: [],
  bootstrap: [CategoryChartOverviewComponent]
})
export class AppModule { }
