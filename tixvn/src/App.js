import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
     <Header/>
        <Switch>

          <Route exact path="/home" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
    
    </BrowserRouter>
  );
}

export default App;
