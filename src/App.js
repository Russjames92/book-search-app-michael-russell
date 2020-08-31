import React from 'react';
import './App.css'
import Header from './Header'
import Search from './ToolBar/Search'

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Search />
      </div>
    );
  }
}

export default App;
