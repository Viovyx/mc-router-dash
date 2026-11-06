# McRouterDash

Very simple dashboard that can be used to manage [mc-router](https://github.com/itzg/mc-router) routes.

It works using the built in API of mc-router but I had to implement some minor changes in [my own fork](https://github.com/Viovyx/mc-router/tree/feat/api-cors-and-auth), adding CORS support and an optional API key.

## Features
- View existing routes
- Delete routes
- Create new routes

## Setup
The easiest way is to setup both mc-router and mc-router-dash with docker compose.

I have written a simple docker compose for mc-router with CORS and API key support [here](https://github.com/Viovyx/mc-router/tree/feat/docker-compose).

1. Clone [my mc-router with docker compose](https://github.com/Viovyx/mc-router/tree/feat/docker-compose).
2. Copy `example.env` to `.env`.
3. Setup the `.env`.
   1. Leave `API_KEY` empty to disable it.
   2. Make sure `APP_ALLOWED_ORIGINS` includes the domain where your dashboard will be hosted on!
   3. Setup the ports according to your setup.
4. Start `mc-router`
```sh
docker compose up -d --build
```
5. Make sure your `mc-router` API is accessible for the dash client (public).
6. Clone this repo (`mc-router-dash`).
7. Clone `example.env` to `.env`.
8. Setup the `.env`
   1. Set `MC_ROUTER_API` to the address the client will use to reach the API.
   2. Set the port according to your setup.
   3. If you set an `API_KEY` earlier make sure to set it here as well.
9. Start `mc-router-dash`
```sh
docker compose up -d --build
```

> [!NOTE]
> Since this is a client side application the `.env` vars get injected into the build process.
> 
> If you change any vars in `.env` make sure to rebuild the image!

## Preview
<img width="1261" height="385" alt="McRouterDash Preview" src="https://github.com/user-attachments/assets/0337eb18-95d4-45f4-bcd2-c21cff4c305e" />
