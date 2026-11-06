import { Component, inject, signal } from '@angular/core';
import { McRouter } from '../mc-router';
import { RouteItem } from './route-item/route-item';
import { Card } from '../components/card/card';
import { RouteForm } from '../route-form/route-form';
import { ActionButton } from '../components/action-button/action-button';

@Component({
  imports: [RouteItem, Card, RouteForm, ActionButton],
  selector: 'app-route-list',
  styleUrl: './route-list.css',
  templateUrl: './route-list.html',
})
export class RouteList {
  mcRouter = inject(McRouter);
  routeFormShown = signal<boolean>(false);
}
