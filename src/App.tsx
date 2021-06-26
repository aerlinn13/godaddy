import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { getRepos } from './state/slice';
import RepoList from './components/RepoList/RepoList';
import SingleRepo from './components/SingleRepo';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: black;
    color: white;
    height: 100vh;
  }
`;

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRepos());
	}, []);

	return (
    <>
		<GlobalStyle />
      <Router>
        <Switch>
        <Route path="/:repoName">
            <SingleRepo />
          </Route>
          <Route path="/">
            <RepoList />
          </Route>
        </Switch>
      </Router>
		</>
	);
};

export default App;
