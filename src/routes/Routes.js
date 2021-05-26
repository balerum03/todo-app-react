import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import { DataProvider } from '../context/DataContext';
import Home from '../components/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default Routes;