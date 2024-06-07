import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
   { path: '',component:WeatherComponent}
];
