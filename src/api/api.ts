import { environment } from '../environments/environment';
import { ApiRoute, ApiRouteDataList } from './types';

const host = environment.mcRouterApi;
const apiKey = environment.apiKey;
const headers: HeadersInit = {
  'X-API-KEY': apiKey
};

export async function getRoutes(): Promise<ApiRoute[]> {
  const response = await fetch(host + '/routes', {
    method: 'GET',
    headers: headers
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

export async function addRoute(apiRoute: ApiRoute): Promise<boolean> {
  const response = await fetch(host + '/routes', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(apiRoute)
  });

  return response.ok;
}

export async function deleteRoute(serverAddress: string): Promise<boolean> {
  const response = await fetch(host + '/routes/' + serverAddress.trim(), {
    method: 'DELETE',
    headers: headers
  });

  return response.ok;
}

export async function setDefaultRoute(backend: string): Promise<boolean> {
  const response = await fetch(host + '/defaultRoute', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      backend: backend
    })
  });

  return response.ok;
}
