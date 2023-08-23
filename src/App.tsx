import '.App.scss';
import { Route } from 'react-router-dom';
import ListPage from './page/ListPage';
import Viewer from './component/Viewer';
import { Provider } from 'react-redux';
import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Route path={`/:menu?`} component={ListPage}></Route>
          <Route path={`/viewer/:id?`} component={Viewer}></Route>
      </div>
    </Provider>
  );
}

export default App;
