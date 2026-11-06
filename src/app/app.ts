import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteList } from './route-list/route-list';

@Component({
  imports: [RouterOutlet, RouteList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
