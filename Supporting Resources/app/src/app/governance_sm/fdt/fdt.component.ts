import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'GSM-fdt',
  templateUrl: './fdt.component.html',
  styleUrls: ['./fdt.component.scss'],
  providers: [AuthService]
})
export class GSMFdtComponent implements OnInit {
  strategy_rating: any;
  education_rating:any;
  policy_rating:any;

  governance:any;




  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.secondgraph().subscribe(
      res => {
        console.log(res.strategy_rating);
      this.strategy_rating=res.strategy_rating;
      this.education_rating=res.education_rating;
      this.policy_rating=res.policy_rating;
      this.governance=res.governance;
      networkSeries.data = [
   /*  {
     name: 'Prior to employment',
      // fixed: true,
      // x: am4core.percent(20),
      // y: am4core.percent(50),
      children: [
      {
        name: 'Screening', value: 1
      },
      {
        name: 'Terms and conditions of employment', value: 3
      }
      ]
    }, */


    {
      name: 'Governance',value:this.governance,
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        { name: 'Strategy & Metrics',value: this.strategy_rating },
        { name: 'Policy & Compliance',value: this.policy_rating },
        { name: 'Education & Guidance',value: this.education_rating }


      ]
    },
    {
      name: 'Design',value:res.design,
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        { name: 'Threat Assessment',value: res.threat_rating},
        { name: 'Security Requirements',value: res.security_rating },
        { name: 'Secure Architecture',value:res.secure_arch_rating }


      ]
    },
    {
      name: 'Implementation',value:res.implementation,
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        { name: 'Secure Build',value: res.secure_build_rating},
        { name: 'Secure Deployment',value: res.secure_deploy_rating },
        { name: 'Defect Management',value: res.defect_rating }


      ]
    },
    {
      name: 'Verification',value:res.verification,
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        { name: 'Architecture Assessment',value: res.verify_arch_rating},
        { name: 'Requirements Driven Testing',value:res.verify_requirement_rating },
        { name: 'Security Testing',value: res.verify_security_rating }


      ]
    },
    {
      name: 'Operation',value:res.operational,
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        { name: 'Incident Management',value: res.operate_incident_rating },
        { name: 'Environment Management',value: res.operate_environment_rating },
        { name: 'Operational Management',value: res.operate_operational_rating }


      ]
    }

   /* {
      name: 'Termination and change of employment',
      // fixed: true,
      // x: am4core.percent(40),
      // y: am4core.percent(50),
      children:
      [
        {
          name: 'Management direction for information security',
          children:
          [
            { name: 'Policies for information security', value: 1 },
            { name: 'Review of the policies for information security', value: 1}
          ]
        }
      ]
    }
 */
    ];

      },
      err => {
        this.education_rating = err.error.message;
      }
    );
    const chart = am4core.create('chartdiv_fdt', am4plugins_forceDirected.ForceDirectedTree);
    chart.logo.disabled = true;
    chart.legend = new am4charts.Legend();

    const networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

    networkSeries.data = [ ];

    networkSeries.nodes.template.outerCircle.filters.push(new am4core.DropShadowFilter());

    networkSeries.dataFields.linkWith = 'linkWith';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.id = 'name';
    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.children = 'children';
    networkSeries.dataFields.fixed = 'fixed';

    networkSeries.nodes.template.propertyFields.x = 'x';
    networkSeries.nodes.template.propertyFields.y = 'y';

    networkSeries.nodes.template.tooltipText = '{name}: {value}';
   // networkSeries.tooltip.label.maxWidth = 20;
    networkSeries.tooltip.label.wrap = true;
    networkSeries.tooltip.fontSize = 12;
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = '{name}';
    // networkSeries.nodes.template.label.fill = am4core.color('#539db3');
    // networkSeries.nodes.template.label.fill = am4core.color('lightblue');
    networkSeries.fontSize = 8;
    networkSeries.maxLevels = 3;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;

    networkSeries.minRadius = 10;
    networkSeries.maxRadius = 15;

    networkSeries.colors.list = [
      am4core.color('#6771dc'),
      am4core.color('#67b7dc')
    ];
    // networkSeries.colors.wrap = false;


    networkSeries.links.template.strokeWidth = 2;
    networkSeries.links.template.strokeOpacity = 0.7;
    // networkSeries.links.template.distance = 3;


    //chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.fontSize = 10;
    // chart.legend.fill = am4core.color('#ffffff');
   // chart.legend.height = am4core.percent(10);

    chart.legend.labels.template.fill = am4core.color('#d3d3d3');

    const markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;



  }

}