import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import News from './pages/News/News';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate component={Home} exact path="/"/>
        <HomeTemplate component={Detail} exact path="/detail/:postId"/>
        <HomeTemplate component={CheckOut} exact path="/checkout/:id"/>
        <Route component={Register} exact path="/register"/>
        {/* Admin  */}
        <AdminTemplate component={ManageMovie} exact path="/admin/quanlyphim"/>
      </Switch>
    </Router>
  );
}

export default App;
