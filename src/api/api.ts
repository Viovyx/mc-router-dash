import { environment } from '../environments/environment';
import { ApiRoute, ApiRouteDataList } from './types';

const host = environment.mcRouterApi;
const apiKey = environment.apiKey;

export async function getRoutes(): Promise<ApiRoute[]> {
  const response = await fetch(`${host}/routes`, {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey
    }
  });
  if (!response.ok) throw new Error('Failed to fetch servers');

  const data: ApiRouteDataList = await response.json();

  let routes: ApiRoute[] = [];
  for (const routeName in data) {
    if (!Object.hasOwn(data, routeName)) continue;
    const route = data[routeName];

    routes.push({
      serverAddress: routeName,
      backend: route.backend
    });
  }

  return routes;
}
