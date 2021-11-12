import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Cars from './Pages/Cars/Cars';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoginHome from './Pages/Login/LoginHome/LoginHome';
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LoginHome></LoginHome>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/carbazar'>
              <Cars></Cars>
            </Route>
            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
