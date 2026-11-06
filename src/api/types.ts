export interface ServerRouteData {
  backend: string;
  scalingTarget: string;
}

export type ServerRouteDataList = Record<string, ServerRouteData>;

export interface ServerRoute {
  serverAddress: string;
  backend: string;
}
