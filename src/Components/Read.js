import React from "react";
import BookItem from "./BookItem.js";

class Read extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <BookItem bookshelf={this.props.bookshelf} />
            </li>
            <li>
              <BookItem bookshelf={this.props.bookshelf} />
            </li>
            <li>
              <BookItem bookshelf={this.props.bookshelf} />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Read;