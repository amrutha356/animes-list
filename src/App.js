import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Wishlist from "./components/Wishlist";
import Searchpage from "./components/Searchpage";
function App() {
  return (
    <Router>
    <div className="App">
           <Navbar/>

           <Switch>
            <Route exact path="/">
                 <Home/>
            </Route>

          <Route path="/Search:SearchVal">
            <Searchpage/>
          </Route>

            <Route exact path="/wishlist">
              <Wishlist/>
            </Route>
           </Switch>

  

    </div>
    </Router>
  );
}

export default App;
