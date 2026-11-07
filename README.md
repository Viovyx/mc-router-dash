# McRouterDash

Very simple dashboard that can be used to manage [mc-router](https://github.com/itzg/mc-router) routes via its API.

## Features
- View existing routes
- Delete routes
- Create new routes

> [!WARNING]
> There currently is no built-in authentication for the dashboard! It is expected to put the dashboard behind a proxy that will restrict access or only make it available locally!

## Setup
I have written a fork of `mc-router` with the CORS and API key support implemented [here](https://github.com/Viovyx/mc-router/tree/feat/api-cors-and-auth).

5. Make sure your `mc-router` API is accessible for the dash client and has CORS configured correctly (public).
6. Clone this repo (`mc-router-dash`).
7. Clone `example.env` to `.env`.
8. Setup the `.env`
   1. Set `MC_ROUTER_API` to the address the client will use to reach the API.
   2. Set the port according to your setup.
   3. If you set an API key for `mc-router` make sure to set it here as well.
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
