import React, { useContext, useReducer} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Context from "store/context";
import reducer from "store/reducer";
import routes from "routes"
import Layout from "components/Layout"
import {NotificationContainer} from 'react-notifications';

import "assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <div className="bgimage">
          <Layout>
            <Route component={routes} />
          </Layout>
          <NotificationContainer/>
        </div>

      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
