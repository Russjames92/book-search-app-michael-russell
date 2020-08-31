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

  filter = (printType) => {
    const newArr = this.state.bookList.filter((item) => item.volumeInfo.printType === printType);
    this.setState({booklist: newArr})
  }

  render() {
    return (
      <div>
      <Header />
      <Search search={this.search} />
      <Filter booklist={this.state.bookList} filter={this.filter}/>
      <Booklist booklist={this.state.bookList}/>
      </div>
    );
  }
}

export default App;
