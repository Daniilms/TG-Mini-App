import { BookDataT } from "../../consts/types";
import "./BooksCard.css";

interface BooksCardProps {
  book: BookDataT;
}

export const BooksCard = ({ book }: BooksCardProps) => {
  return (
    <li className="infinity-books-list-card">
      <p className="infinity-books-list-card-author">
        {book.work.author_names[0]}
      </p>
      <p className="infinity-books-list-card-title">{book.work.title}</p>
    </li>
  );
};
