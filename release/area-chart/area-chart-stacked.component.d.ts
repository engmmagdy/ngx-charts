/// <reference types="core-js" />
import { EventEmitter, ElementRef, OnChanges, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class AreaChartStacked extends BaseChart implements OnChanges, OnDestroy, AfterViewInit {
    element: HTMLElement;
    dims: ViewDimensions;
    scaleType: string;
    xDomain: any[];
    xSet: any[];
    yDomain: any[];
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    clipPathId: string;
    clipPath: string;
    colors: Function;
    margin: number[];
    hoveredVertical: any;
    view: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: boolean;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    timeline: any;
    gradient: any;
    showGridLines: boolean;
    clickHandler: EventEmitter<{}>;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): number[];
    getSeriesDomain(): any;
    getXScale(): any;
    getYScale(): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    click(data: any, series: any): void;
    trackBy(index: any, item: any): any;
    setColors(): void;
}
