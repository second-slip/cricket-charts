import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IChartData } from './i-chart-data.dto';
import {
  cumulativeAverageData,
  cumulativeStrikeRateData,
  cumulativeEconomyData,
  ageAnalysisData,
  formatAnalysisData,
  wicketsPerMatch,
  wicketsByTeamData,
  matchInningsAnalysisData,
  yearAnalysisData,
  homeAwayAverageData,
  homeGroundData,
} from '../assets/chartData';
import { IHomeAwayData } from './home_away/ave-home-away/i-hone-away-data.dto';
import { IGroundAnalysisBar } from './grounds/i-ground-analysis-bar';

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  constructor() {}

  public getAveHomeAway(): Observable<IHomeAwayData> {
    return of(homeAwayAverageData);
  }

  public getHomeGroundsData(): Observable<IGroundAnalysisBar> {
    return of(homeGroundData);
  }

  public getCumulativeAverageSeries(): Observable<IChartData> {
    return of(cumulativeAverageData);
  }

  public getCumulativeStrikeRateSeries(): Observable<IChartData> {
    return of(cumulativeStrikeRateData);
  }

  public getCumulativeEconomySeries(): Observable<IChartData> {
    return of(cumulativeEconomyData);
  }

  public getWicketsByTeamSeries(): Observable<IChartData> {
    return of(wicketsByTeamData);
  }

  public getMatchInningsAnalysis(): Observable<IChartData> {
    return of(matchInningsAnalysisData);
  }

  public getYearsAnalysis(): Observable<IChartData> {
    return of(yearAnalysisData);
  }

  public getAgeAnalysis(): Observable<IChartData> {
    return of(ageAnalysisData);
  }

  public getFormatAnalysis(): Observable<IChartData> {
    return of(formatAnalysisData);
  }

  public getWicketsPerMatchDataSeries(): Observable<IChartData> {
    return of(wicketsPerMatch);
  }
}
