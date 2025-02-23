import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@estoque-app/front-header",
  app: () => System.import<LifeCycles>(/* webpackIgnore: true */ "@estoque-app/front-header"),
  activeWhen: ["/"],
});
start({
  urlRerouteOnly: true,
});
