import React from "react";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import { StoreProvider } from './StoreContext';

/* Pages */
import Post from './pages/Post';
import Blog from './pages/Blog';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/post/:postId" component={Post} />
          <Route path="/" component={Blog} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
