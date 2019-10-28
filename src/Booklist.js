import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
export default class booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }

  handleDelete = () => {
    console.log(` It is from parent component`);
  };

  render() {
    return (
      <section>
        <h3>This is our booklist</h3>
        {this.state.books.map(item => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
