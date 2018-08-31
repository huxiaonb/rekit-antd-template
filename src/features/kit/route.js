import { App, Main, FoodPanel, OrderManage, CookPlan, PurchasePlan, ToStorage, Inventory, Settings } from './'; // This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html // This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html


export default {
  path: 'kit',
  name: 'Kit',
  component: App,
  childRoutes: [
    { path: '', name: 'Main', component: Main},
    { path: 'food', name: 'Food panel', component: FoodPanel},
    { path: 'order', name: 'Order manage', component: OrderManage},
    { path: 'CookPlan', name: 'Cook plan', component: CookPlan},
    { path: 'PurchasePlan', name: 'Purchase plan', component: PurchasePlan},
    { path: 'ToStorage', name: 'To storage', component: ToStorage},
    { path: 'inventory', name: 'Inventory', component: Inventory},
    { path: 'settings', name: 'Settings', component: Settings},
  ],
};
