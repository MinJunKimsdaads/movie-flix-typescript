import React from 'react';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import Viewer from './component/Viewer';
import { Provider } from 'react-redux';
import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path={`/:menu?`} element={<ListPage></ListPage>}></Route>
          <Route path={`/viewer/:id?`} element={<Viewer></Viewer>}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
