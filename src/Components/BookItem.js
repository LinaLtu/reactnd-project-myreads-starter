import React from "react";
import BookShelfChanger from "./BookShelfChanger.js";

class BookItem extends React.Component {
  render() {
    let url = "";
    if (
      this.props.bookInfo.imageLinks &&
      this.props.bookInfo.imageLinks.thumbnail
    ) {
      url = this.props.bookInfo.imageLinks.thumbnail;
    } else {
      url = "/placeholder.jpg";
    }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${url})`
            }}
          />

          <BookShelfChanger
            bookId={this.props.bookInfo.id}
            shelf={this.props.bookInfo.shelf || null}
            onSelectChange={event =>
              this.props.onShelfChange(
                this.props.bookInfo.id,
                this.props.bookInfo.shelf,
                event.target.value
              )
            }
          />
        </div>
        <div className="book-title">{this.props.bookInfo.title}</div>
        {this.props.bookInfo.authors &&
          this.props.bookInfo.authors.length !== 0 &&
          this.props.bookInfo.authors.map(author => {
            return (
              <div className="book-authors" key={author}>
                {author}
              </div>
            );
          })}
      </div>
    );
  }
}

export default BookItem;
