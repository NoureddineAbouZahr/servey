import Navbar from "./Navbar"
import Serveys from "./Serveys"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./Create"
import Responses from "./Responses"

const AdminPage = () => {
  return (
    <Router>
    <div>
        
        <Switch>
            <Route  exact path='/admin'>
                 <Navbar />
                <Serveys />

            </Route>
            <Route  exact path='/'>
                 <Navbar />
                <Serveys />

            </Route>
            <Route path='/Create'>
                 <Navbar />
                <Create />

            </Route>

            <Route path='/res'>
                <Navbar />
                <Responses />

            </Route>




       
        </Switch>
    </div>
    </Router>
        
  )
}

export default AdminPage