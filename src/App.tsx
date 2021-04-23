import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import OnePage from './pages/OnePage/OnePage';

const routes = {
  onepage: {
    path: '/onepage',
    name: 'OnePage'
  },
}

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path={routes.onepage.path}>
          <OnePage/>
        </Route>

        <Route path={"/"}>
          <div style={{display: 'flex', flexDirection: 'column', rowGap: 8}}>
            <Link to={routes.onepage.path}>{routes.onepage.name}</Link>
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
