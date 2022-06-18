import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@weincode/mf-header",
  app: () => System.import("@weincode/mf-header"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@weincode/mf-footer",
  app: () => System.import("@weincode/mf-footer"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
