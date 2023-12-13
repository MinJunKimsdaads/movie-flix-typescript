import React from 'react';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import {useEffect} from "react";
import { reducerType } from "./store/Store";
import { useSelector, useDispatch} from "react-redux";
import ListPage from './page/ListPage';
import Loading from './component/Loading';
import Viewer from './component/Viewer';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import { createContext, useState} from "react";
import {Dialog, DialogProvider}  from "./component/Dialog";


function App() {
  // const globalLoading = useSelector((state:reducerType) => state.reducer4); //로딩
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //     if(globalLoading === false){
  //         setTimeout(()=>{
  //             dispatch({
  //                 type:'closeLoading',
  //             });
  //         },7000)
  //     }
  // },[globalLoading,dispatch]);

  return (
    <DialogProvider>
        <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path={`/:menu?`} element={<ListPage></ListPage>}></Route>
            <Route path={`/viewer/:id?`} element={<Viewer></Viewer>}></Route>
          </Routes>
          <Dialog></Dialog>
        </div>
      </Provider>
    </DialogProvider>
  );
}

export default App;
