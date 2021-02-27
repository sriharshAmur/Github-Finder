import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import User from './Components/users/User';
// import Footer from './Components/layout/Footer';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound}/> 
              </Switch>
            </div>
            {/* <Footer /> */}
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );


  // useEffect(async () => {
  //   setLoading(true);

  //   const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  //   const res = await axios.get(url);
  //   console.log(await res.data.items);
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }, [])

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  //   const res = await axios.get(url);

  //   this.setState({ users: res.data, loading: false });

  // }  
}


export default App;
