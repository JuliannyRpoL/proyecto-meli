import Home from "../screens/home/home.js";
import ItemDescription from "../screens/item-description/item-description.js";
import Results from "../screens/results/results";

const routes = [
    {
      path: "/",
      exact: true,
      page: Home,
    },
    {
      path: "/items",
      exact: true,
      page: Results,
    },
    {
      path: "/items/:id",
      exact: true,
      page: ItemDescription,
    },
    {
      path: "*",
      page: Home,
    },
];

export default routes;