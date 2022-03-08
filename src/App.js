
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import RandomPage from './Components/Routes/RandomPage';
import PokemonInfoPage from './Components/Routes/PokemonInfoPage';
import Search from './Components/Search/Search';
import PageNotFound from './Components/GeneralComponets/PageNotFound';

import {useLocation} from 'react-router-dom'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
     
    <Switch >
      <Route path='/' exact>
          <RandomPage />
        </Route>
        <Route path='/info/:pokemon' >
          <PokemonInfoPage />
        </Route>
        <Route path="/search" exact>
            <Search />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>

    </Switch>

  
    </div>
  );
}

export default App;
