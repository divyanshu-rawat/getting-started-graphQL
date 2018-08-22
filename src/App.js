import React, { Component } from 'react';
import './App.css';


import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
