import { useEffect, useState } from "react";
import { BooksList } from "../../components/BooksList/BooksList";
import { Button } from "../../components/Button/Button";
import { useBooksData } from "../../hooks/useBooksData";
import "./InfinityScrollPage.css";

export const InfinityScrollPage = () => {
  const data = useBooksData();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setDisplayedItems(data.slice(0, itemsPerPage));
  }, [data]);

  const loadMoreItems = () => {
    const endIndex = currentPage + itemsPerPage;
    const newItems = data.slice(endIndex, endIndex + itemsPerPage);

    if (endIndex + itemsPerPage < data.length) {
      setDisplayedItems([...displayedItems, ...newItems]);
    }
    setCurrentPage(currentPage + itemsPerPage);
  };

  const handleLoadMore = () => {
    loadMoreItems();
  };

  return (
    <div className="scroll-container">
      <div className="infinity-wrp">
        <BooksList booksList={displayedItems} />
        {displayedItems.length > 0 ? (
          <Button text={"Load More"} action={handleLoadMore} />
        ) : null}
      </div>
    </div>
  );
};
