import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import User from './Components/users/User';
// import Footer from './Components/layout/Footer';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import axios from 'axios';
import './App.css';

const App = () =>  {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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

  const getUser = async (username) => {
    setLoading(true);

    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);

    setUser(res.data);
    setLoading(false);


  }
  
  const getUserRepos = async (username) => {
    setLoading(true);

    const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);

    setRepos(res.data);
    setLoading(false);
  }

  const searchUsers = async (text) => {
    setLoading(true);

    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);

    setUsers(res.data.items);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users && users.length > 0 ? true : false} setAlert={showAlert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render= {props => (
                <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} loading={loading} user={user} />
              )} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    );
}


export default App;
