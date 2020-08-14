import React, { Suspense, } from "react";
import { Switch, Route, } from "react-router-dom";
import { routes } from 'routes/_nav'

const Routes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map(({ path, component }, key) => <Route path={path} exact component={component} key={key} />)}
          </Switch>
      </Suspense>

    </>
  );
};
export default Routes;
