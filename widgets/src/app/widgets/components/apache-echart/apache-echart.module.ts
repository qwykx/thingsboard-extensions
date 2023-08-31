import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { ApacheEchartComponent } from './apache-echart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ApacheEchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule.forChild()
  ],
  exports: [
    ApacheEchartComponent
  ]
})

export class ApacheEchartModule { }