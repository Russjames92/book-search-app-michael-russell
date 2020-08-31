import React from 'react';
import './App.css'
import Header from './Header'
import Search from './ToolBar/Search'
import Filter from './ToolBar/Filter'

class App extends React.Component {
  state = {
    bookList: []
  };

  search = (books) => {
    console.log('app search', books)
    this.setState({
      bookList: books
    })
  } 

  render() {
    return (
      <div>
      <Header />
      <Search search={this.search} />
      <Filter />
      </div>
    );
  }
}

export default App;
