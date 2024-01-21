import React from 'react';

import './App.scss';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import {useEffect} from "react";
import { reducerType } from "./store/Store";
import { useSelector, useDispatch} from "react-redux";
import ListPage from './page/ListPage';
import Loading from './component/Loading';
import Viewer from './component/Viewer';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import { createContext, useState} from "react";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
      if(!loading){
          setTimeout(()=>{
              setLoading(true);
          },7000)
      }
  },[loading]);

  console.log(process.env.PUBLIC_URL);

  return (
      <Provider store={store}>
          <div className="App">
            <Routes>
              <Route path={`/:menu?`} element={loading ? <ListPage></ListPage> : <Loading></Loading>}></Route>
              <Route path={`/viewer/:id?`} element={<Viewer></Viewer>}></Route>
            </Routes>
          </div>
      </Provider>
  );
}

export default App;
