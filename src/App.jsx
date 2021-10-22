import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Frontpage from 'pages/frontpage/frontpage';
import 'scss/base.scss';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

render(<App />, document.querySelector('#render-target'));
