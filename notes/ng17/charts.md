# Using Charts in Angular

In any modern web application, **data visualization** plays a key role. Whether you are building dashboards, analytics panels, admin reports, or monitoring tools — users understand data faster when it is shown visually rather than as plain numbers.

That’s where **Charts in Angular** come in.

Angular provides a powerful component-based architecture, which makes it easy to integrate chart libraries like:

* **Chart.js** (simple, lightweight, responsive)
* **Google Charts** (mature, feature-rich, interactive)
* **ApexCharts** (professional dashboards & animations)
* **ECharts** (enterprise-level analytics)
* **D3.js** (highly customizable low-level graphics)

Each chart library has its own strengths, but the idea remains the same:

👉 **You collect your data, choose the chart type, bind it to a chart component, and Angular handles the rest.**



- ✔ Clear visual storytelling
Charts convert raw data into trends, comparisons, and patterns that users can understand instantly.

- ✔ Perfect for dashboards
Sales reports, student performance, product analytics, system monitoring — all look better with charts.

- ✔ Works with APIs
Angular services can fetch live data from REST APIs and update charts dynamically.

- ✔ Reusable components
Using Angular's component architecture, you can create:

* `BarChartComponent`
* `LineChartComponent`
* `SalesDashboardComponent`

…and reuse them across the application.

### ✔ Easy to integrate

Angular supports all modern chart libraries and provides hooks (ngOnInit, ngAfterViewInit) to update charts smoothly.


## 📊 **Common Types of Charts You Can Build**

* **Bar Chart**: Compare categories (e.g., monthly sales)
* **Line Chart**: Show trends over time (e.g., visitors per day)
* **Pie / Donut Chart**: Show distribution or percentage
* **Area Chart**: Show growth patterns
* **Column Chart**: Vertical variation of data
* **Scatter / Bubble Charts**: Analytical comparisons
* **Geo Chart**: Country-level or region-level analytics
* **Gauge Chart**: Performance indicators
* **Combo Charts**: Mix of bar + line

## 🔧 **Where Charts Fit in an Angular App**

Charts are usually used in:

* Admin dashboards
* Sales & finance modules
* Education analytics systems
* HR reporting tools
* IoT dashboards
* Healthcare monitoring
* E-commerce inventory dashboards

A typical Angular module or feature might include:

```
charts/
 ├── bar-chart.component.ts
 ├── line-chart.component.ts
 ├── sales-dashboard.component.ts
 └── services/data.service.ts
```

Each component focuses on a specific visualization.

When you build an Angular application, you're not just writing code —
you're telling a story.

Charts help you **communicate insights**, **summarize behaviour**, and **guide decisions**.
A well-designed chart can explain in 3 seconds what a table takes 30 seconds to read.

Think of charts as the **eyes of your application**, helping the user see data clearly.

 
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

## 🚀 Step 5: oad Google Charts script in index.html

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```
### **google-charts.component.html**

- ✔ 100% compatible with Angular 17
- ✔ No NgModule needed
- ✔ Works in Standalone + Zoneless
- ✔ No dependency on outdated libraries

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