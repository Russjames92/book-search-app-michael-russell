import React from 'react';
import './App.css'
import Header from './Header'
import Search from './ToolBar/Search'
import Filter from './ToolBar/Filter'
import Booklist from './BookList/Booklist'

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
      <Booklist booklist={this.state.bookList}/>
      </div>
    );
  }
}

export default App;
