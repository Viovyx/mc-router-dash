import { resource, Service } from '@angular/core';
import { environment } from '../environments/environment';
import { addRoute, deleteRoute, getRoutes, setDefaultRoute } from '../api/api';
import { ServerRoute } from '../api/types';

@Service()
export class McRouter {
  protected readonly mcRouterApi = environment.mcRouterApi;

  readonly routes = resource({
    loader: () => getRoutes(),
  });

  async addRoute(serverRoute: ServerRoute): Promise<boolean> {
    const result = await addRoute(serverRoute);
    if (result) this.routes.reload();
    return result;
  }

  async deleteRoute(serverAddress: string): Promise<boolean> {
    const result = await deleteRoute(serverAddress);
    if (result) this.routes.reload();
    return result;
  }

  async setDefaultRoute(backend: string): Promise<boolean> {
    const result = await setDefaultRoute(backend);
    if (result) this.routes.reload();
    return result;
  }
}
