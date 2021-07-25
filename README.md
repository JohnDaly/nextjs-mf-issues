An example repo to demonstrate the issues I've been encountering with Module Federation with NextJS

## Getting Started
1. run npm install `@module-federation/nextjs-mf --registry https://r.privjs.com` with npm 7 or install it directly in each folder/app, note the plugin is not free.
2. run `npm start` and browse to http://localhost:3000 (Checkout app) or http://localhost:3001 (Home app)

## Bugs that I've encountered:

**Attempting to access the Home app at `localhost:3001` will result in the federated components failing to load from the Checkout app**


Federated components will load properly if you start at `http://localhost:3001/checkout`, and use the navigation links to switch between `http://localhost:3001/` and `http://localhost:3001/checkout`


**Video showing the broken behavior**

https://user-images.githubusercontent.com/1719443/126884979-f374d1b9-3fba-46dd-b921-9f9f15581edb.mp4

**Video showing the working behavior**

https://user-images.githubusercontent.com/1719443/126884995-a7eb054c-8250-4b2e-9387-bcd8374f3a4b.mp4




---

**Attempting to access the Checkout app at `localhost:3000` or `localhost:3000/checkout` will not display content below the heading**

The error that occurs here  is `ReferenceError: home is not defined while loading "./NavLayout" from webpack/container/reference/home`
