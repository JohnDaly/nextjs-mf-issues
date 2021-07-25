An example repo to demonstrate the issues I've been encountering with Module Federation with NextJS

Bugs that I've encountered:

**Attempting to access the Home app at `localhost:3001` will result in the federated components failing to load from the Checkout app**


Federated components will load properly if you start at `http://localhost:3001/checkout`, and use the navigation links to switch between `http://localhost:3001/` and `http://localhost:3001/checkout`

---

**Attempting to access the Checkout app at `localhost:3000` or `localhost:3000/checkout` will not display content below the heading**

The error that occurs here  is `ReferenceError: home is not defined while loading "./NavLayout" from webpack/container/reference/home`