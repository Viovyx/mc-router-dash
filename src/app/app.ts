import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteList } from './route-list/route-list';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, RouteList, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
