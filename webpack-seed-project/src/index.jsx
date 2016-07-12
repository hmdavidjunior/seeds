import React from 'react';
import ReactDOM from 'react-dom';

import RootApp from './views/RootApp.jsx';

//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//const store = createStoreWithMiddleware(reducers);

//<Provider store={store}>

ReactDOM.render(
  <RootApp>
    <div>Hello world</div>
  </RootApp>
  , document.querySelector('.container'));