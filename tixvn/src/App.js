import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory();

function App() {
  return (
    // <BrowserRouter>
    //  <Header/>
    //     <Switch>

    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/detail" component={Detail} />
    //     </Switch>
    
    // </BrowserRouter>
    <Router history={history}>
      <Switch>
        <HomeTemplate component={Home} exact path="/"/>
        <HomeTemplate component={Detail} exact path="/detail/:postId"/>
        <HomeTemplate component={CheckOut} exact path="/checkout/:id"/>
        <Route component={Register} exact path="/register"/>
      </Switch>
    </Router>
  );
}

export default App;
