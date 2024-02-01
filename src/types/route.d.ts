declare namespace AuthRoute {
  type meta = {
    title: string;
    icon?: string;
  };

  type Route = {
    name: string;
    path: string;
    component?: any;
    meta?: meta;
    redirect?: string;
    children?: Route[];
  };
}
