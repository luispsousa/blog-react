import React from "react";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import { StoreProvider } from './StoreContext';

/* Pages */
import Post from './pages/Post';
import Blog from './pages/Blog';
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/post/:postId" component={Post} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
