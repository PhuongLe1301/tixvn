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
import Login from './pages/Login/Login';
import AdminTemplate from './template/AdminTemplate/AdminTemplate';
import ManageMovie from './pages/ManageMovie/ManageMovie';
import ManageUser from './pages/ManageUser/ManageUser';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* Client  */}
        <HomeTemplate component={Home} exact path="/" />
        <HomeTemplate component={Detail} exact path="/detail/:postId" />
        <HomeTemplate component={CheckOut} exact path="/checkout/:id" />
        <Route component={Register} exact path="/register" />
        <Route component={Login} exact path="/login" />
        <Route component={News} exact path="/news"/>
        {/* Admin  */}
        <AdminTemplate component={ManageMovie} exact path="/admin/quanlyphim" />
        <AdminTemplate component={ManageUser} exact path="/admin/quanlynguoidung"/>
      </Switch>
    </Router>
  );
}

export default App;
