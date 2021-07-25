An example repo to demonstrate the issues I've been encountering with Module Federation with NextJS

Bugs that I've encountered:

- Attempting to access the Home page at `localhost:3001` will cause the federated components to fail to load
  - Federated components will load properly if you start at `http://localhost:3001/checkout`, and use the navigation links
- Attempting to access the Checkout app at `localhost:3000` will not display content below the heading
- Attempting to access the Checkout app at `localhost:3000/checkout` will not display content below the heading
  - The error for this one is `ReferenceError: home is not defined while loading "./NavLayout" from webpack/container/reference/home`