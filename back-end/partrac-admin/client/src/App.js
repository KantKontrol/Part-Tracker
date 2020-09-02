import React, { useState } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Login from "./pages/Login";
import AdminLanding from "./pages/AdminLanding";
import ViewInventory from "./pages/ViewInventory";
import ActivityLog from './pages/ActivityLog';
import AddModel from "./pages/AddModel";
import EditModel from './pages/EditModel';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
        <Router>
          <Switch>
            {
              loggedIn ? (
              <>
                <Route exact path="/">
                  <Redirect to="/home"/>
                </Route>
                <Route exact path="/home" component={AdminLanding} />
                <Route exact path="/viewinventory" component={ViewInventory}/>
                <Route exact path="/log" component={ActivityLog}/>
                <Route exact path="/addmodel" component={AddModel}/>
                <Route exact path="/editmodel" component={EditModel}/>
                <Route>
                    <Redirect to="/home"/>
                </Route>
              </>)
              :  (
              <> 
                <Route exact path="/login" >
                  <Login setLoggedIn={setLoggedIn} />
                </Route>
                <Route>
                    <Redirect to="/login"/>
                </Route>
              </>
              )
          }
        
          </Switch>
        </Router>
  );
}

export default App;
