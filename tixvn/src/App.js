import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
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
        <HomeTemplate component={Detail} exact path="/detail"/>
      </Switch>
    </Router>
  );
}

export default App;
