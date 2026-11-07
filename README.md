# McRouterDash

Very simple dashboard that can be used to manage [mc-router](https://github.com/itzg/mc-router) routes via its API.

## Features

- View existing routes
- Delete routes
- Create new routes

> [!WARNING]
> There currently is no built-in authentication for the dashboard! It is expected to put the dashboard behind a proxy that will restrict access or only make it available locally!

## Setup

The easiest way to setup both `mc-router` and `mc-router-dash` is with the docker compose in the repo.

1. Clone this repo
2. Copy `example.env` to `.env`
3. Setup the `.env`
   1. Change `DASHBOARD_PORT`, `ROUTER_API_PORT` and `ROUTER_MC_PORT` if needed
   2. Set `MC_ROUTER_API_URL` to the public address for the API
   3. Set `API_ALLOWED_ORIGINS` to the public address of the dashboard, multiple origins can be given by seperating them with a `,`
   4. Set `API_KEY` to a strong password, it's recomended to generate this randomly
4. Start the stack using

```sh
docker compose up -d --build
```

> [!NOTE]
> Since this is a client side application the `.env` vars get injected into the build process.
>
> If you change `MC_ROUTER_API_URL` or `API_KEY` make sure to rebuild the image!

## Preview

<img width="1261" height="385" alt="McRouterDash Preview" src="https://github.com/user-attachments/assets/0337eb18-95d4-45f4-bcd2-c21cff4c305e" />
