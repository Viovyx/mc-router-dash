export interface ApiRouteData {
  backend: string;
  scalingTarget: string;
}

export type ApiRouteDataList = Record<string, ApiRouteData>;

export interface ApiRoute {
  serverAddress: string;
  backend: string;
}
