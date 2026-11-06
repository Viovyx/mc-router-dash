import { resource, Service } from '@angular/core';
import { environment } from '../environments/environment';
import { getRoutes } from '../api/api';

@Service()
export class McRouter {
  protected readonly mcRouterApi = environment.mcRouterApi;

  readonly routes = resource({
    loader: () => getRoutes(),
  });
}
