import { BookDataT } from "../../consts/types";
import { BooksCard } from "../BooksCard/BooksCard";
import { Loader } from "../Loader/Loader";
import "./BooksList.css";

interface BooksListProps {
  booksList: BookDataT[];
}
export const BooksList = ({ booksList }: BooksListProps) => {
  if (booksList.length === 0) {
    return (
      <div className="loader-wrp">
        <Loader />
      </div>
    );
  }
  return (
    <ul className="infinity-books-list">
      {booksList.map((book: BookDataT) => {
        return <BooksCard book={book} key={book.work.key}></BooksCard>;
      })}
    </ul>
  );
};
