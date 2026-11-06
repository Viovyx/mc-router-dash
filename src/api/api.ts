import { environment } from '../environments/environment';
import { ServerRoute, ServerRouteDataList } from './types';

const host = environment.mcRouterApi;
const apiKey = environment.apiKey;
const headers: HeadersInit = {
  'X-API-KEY': apiKey
};

export async function getRoutes(): Promise<ServerRoute[]> {
  const response = await fetch(host + '/routes', {
    method: 'GET',
    headers: headers
  });
  if (!response.ok) throw new Error('Failed to fetch servers');

  const data: ServerRouteDataList = await response.json();

  let routes: ServerRoute[] = [];
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

export async function addRoute(serverRoute: ServerRoute): Promise<boolean> {
  const response = await fetch(host + '/routes', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(serverRoute)
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
