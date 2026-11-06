import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, email, minLength, pattern } from '@angular/forms/signals';
import { ServerRoute } from '../../api/types';
import { McRouter } from '../mc-router';
import { ActionButton } from '../components/action-button/action-button';

@Component({
  imports: [FormField, ActionButton],
  selector: 'app-route-form',
  styleUrl: './route-form.css',
  templateUrl: './route-form.html',
})
export class RouteForm {
  mcRouter = inject(McRouter);

  readonly routeInitialState: ServerRoute = {
    serverAddress: '',
    backend: '',
  };

  routeModel = signal<ServerRoute>({ ...this.routeInitialState });

  routeForm = form(this.routeModel, (route) => {
    required(route.serverAddress, { message: 'Server addres is required.' });
    pattern(
      route.serverAddress,
      /^(?=.{1,253}$)(?!-)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      {
        message: 'Server address must be a valid domain name.',
      },
    );

    required(route.backend, { message: 'Backend is required.' });
    pattern(route.backend, /^.+:\d+$/, {
      message: 'Backend must be of format host:port',
    });

    pattern(
      route.backend,
      /^.+:([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
      {
        message: 'Backend must have a valid port number (1-65535)',
      },
    );
  });

  submit(event?: Event) {
    if (event) event.preventDefault();
    if (this.routeForm().invalid()) return;

    this.mcRouter.addRoute(this.routeModel());
    this.routeForm().reset({ ...this.routeInitialState });
  }
}
