
# **Using Charts in Angular**

**This works perfectly with Angular 17**
(Safest & Recommended in Angular 17/18/19/20 projects)

## 🚀 Step 1: Install Google Charts loader

```bash
npm install google-charts
```

## 🚀 Step 2: Create a Google Chart component

```bash
ng g component google-charts --standalone
```

## 🚀 Step 3: Use Google Charts manually

### **google-charts.component.ts**

```ts
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-google-charts',
  standalone: true,
  templateUrl: './google-charts.component.html'
})
export class GoogleChartsComponent implements AfterViewInit {

  @ViewChild('barChart', { static: false }) barChart!: ElementRef;
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef;

  ngAfterViewInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      this.drawBarChart();
      this.drawLineChart();
    });
  }

  drawBarChart() {
    const data = google.visualization.arrayToDataTable([
      ['Month', 'Sales'],
      ['Jan', 120],
      ['Feb', 150],
      ['Mar', 180]
    ]);

    const options = {
      title: 'Monthly Sales',
      colors: ['#42A5F5']
    };

    const chart = new google.visualization.ColumnChart(this.barChart.nativeElement);
    chart.draw(data, options);
  }

  drawLineChart() {
    const data = google.visualization.arrayToDataTable([
      ['Day', 'Visitors'],
      ['Mon', 50],
      ['Tue', 70],
      ['Wed', 60]
    ]);

    const options = {
      title: 'Visitors Trend',
      curveType: 'function'
    };

    const chart = new google.visualization.LineChart(this.lineChart.nativeElement);
    chart.draw(data, options);
  }
}
```

## 🚀 Step 4: HTML Template

### **google-charts.component.html**

```html
<h3>Google Bar Chart</h3>
<div #barChart style="width: 100%; height: 300px;"></div>

<h3>Google Line Chart</h3>
<div #lineChart style="width: 100%; height: 300px;"></div>
```

✔ 100% compatible with Angular 17
✔ No NgModule needed
✔ Works in Standalone + Zoneless
✔ No dependency on outdated libraries

## OPTION 2 — Use a modern chart library (Best for industry)

If Google Charts is not mandatory, choose:

### ⭐ ApexCharts → Modern, beautiful, responsive

```bash
npm install apexcharts ng-apexcharts
```

### ⭐ Chart.js → Simple & clean

```bash
npm install chart.js ng2-charts
```

### ⭐ ECharts → Best for analytics dashboards

```bash
npm install echarts ngx-echarts
```