interface Registry {
  [key: string]: () => Promise<any>;
}

export const registry: Registry = {
  Header: () => import("./header"),
  Toggle: () => import("./toggle"),
  Profile: () => import("./profile"),
  // ...
};