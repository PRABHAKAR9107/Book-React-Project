import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  cartCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  downloadCount = () => {};

  // handleClick() {
  //   console.log("Click it", this);
  //   console.log(this.state.count);
  // }

  // handleClick = () => {
  //   console.log("click it");
  //   console.log(this.state.count);
  // };

  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.info;

    const { handleDelete } = this.props;
    console.log(id);

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Title: {title}</h3>
          <h5>Author: {author}</h5>
          <h3>Bag :{this.state.count}</h3>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>

          <button type="button" onClick={this.cartCount}>
            Add to Cart
          </button>
          <button type="button" onClick={this.resetCount}>
            Reset
          </button>
          <button type="button" onClick={this.downloadCount}>
            Download
          </button>
        </div>
      </article>
    );
  }
}
