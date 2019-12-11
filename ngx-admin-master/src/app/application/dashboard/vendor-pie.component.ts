import { AfterViewInit, Component} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { VendorManagementServiceService } from '../../service/vendor-management-service/vendor-management-service.service';

@Component({
  selector: 'ngx-vendor-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class VendorPieComponent implements AfterViewInit {
  options: any = {};
  themeSubscription: any;
  public vendor_data = []

  constructor(private theme: NbThemeService, private _vendor_service:VendorManagementServiceService) {}

  ngAfterViewInit() { 
    this._vendor_service.vendorCountByPeriod().subscribe(
      data =>{
        for (var periods in data){
          if (data[periods]["period"]=="M") {
            this.vendor_data.push({"value":data[periods]["periods"],"name":"MONTHLY"})
          } else if (data[periods]["period"]=="Q") {
            this.vendor_data.push({"value":data[periods]["periods"],"name":"QUATERLY"})
          } else{
            this.vendor_data.push({"value":data[periods]["periods"],"name":"YEARLY"})
          }
        }
      },
      error =>{
        console.log(error)
      }
    )

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ["MONTHLY", "QUATERLY", "YEARLY"],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Vendor',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data:this.vendor_data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
