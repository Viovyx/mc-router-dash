import { Component, inject, input, signal } from '@angular/core';
import { ServerRoute } from '../../../api/types';
import { Card } from '../../components/card/card';
import { ActionButton } from '../../components/action-button/action-button';
import { McRouter } from '../../mc-router';

@Component({
  imports: [Card, ActionButton],
  selector: 'app-route-item',
  styleUrl: './route-item.css',
  templateUrl: './route-item.html',
})
export class RouteItem {
  mcRouter = inject(McRouter);

  serverRoute = input.required<ServerRoute>();
}
