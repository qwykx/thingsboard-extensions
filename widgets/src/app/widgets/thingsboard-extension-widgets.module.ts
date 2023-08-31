import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import addCustomWidgetLocale from './locale/custom-widget-locale.constant';
import { SharedModule } from '@shared/public-api';
import { HomeComponentsModule } from '@home/components/public-api';
import { ApacheEchartModule } from './components/apache-echart/apache-echart.module';
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentsModule,
    SharedModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  exports: [
    ApacheEchartModule,

  ],
  declarations: [
  ],
})
export class ThingsboardExtensionWidgetsModule {

  constructor(translate: TranslateService) {
    addCustomWidgetLocale(translate);
  }

}
