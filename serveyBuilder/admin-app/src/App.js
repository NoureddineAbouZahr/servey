import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import AdminPage from './components/AdminPage';
function App() {
  return (
    <Router>
    <div className="App">
     <div className='afterLogin'>

      <Switch>
        <Route exact path="/">
          
          <Login />

        </Route>

        <Route  path="/admin">
          
            <AdminPage />

        </Route>
      </Switch>

     </div>
      
    </div>
    </Router>
  );
}

export default App;
