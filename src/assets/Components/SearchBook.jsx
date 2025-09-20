import { useState, useEffect } from "react";
import "./SearchBook.css";

function SearchBook() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const books = [
    { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", available: true },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "Programming", available: false },
    { id: 3, title: "Database System Concepts", author: "Abraham Silberschatz", category: "Databases", available: true },
    { id: 4, title: "Design Patterns", author: "Erich Gamma", category: "Software Engineering", available: true },
    { id: 5, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", category: "AI", available: true },
    { id: 6, title: "Operating System Concepts", author: "Silberschatz", category: "Operating Systems", available: false },
    { id: 7, title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", available: true },
    { id: 8, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", available: true },
    { id: 9, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Web Development", available: false },
    { id: 10, title: "You Don’t Know JS", author: "Kyle Simpson", category: "Web Development", available: true },
    { id: 11, title: "Machine Learning", author: "Tom M. Mitchell", category: "AI", available: true },
    { id: 12, title: "Deep Learning", author: "Ian Goodfellow", category: "AI", available: false },
    { id: 13, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Novel", available: true },
    { id: 14, title: "1984", author: "George Orwell", category: "Novel", available: true },
    { id: 15, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Novel", available: false },
    { id: 16, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", available: true },
    { id: 17, title: "The Art of War", author: "Sun Tzu", category: "Philosophy", available: true },
    { id: 18, title: "The Alchemist", author: "Paulo Coelho", category: "Novel", available: false },
    { id: 19, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Fantasy", available: true },
    { id: 20, title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy", available: true },
  ];

  useEffect(() => {
    setResults(books);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        
        <div className="search-left">
          <h2>📚 Explore Your Library</h2>
          <p>Find the books you love and discover new favorites!</p>
        </div>

       
        <div className="search-right">
          <h1>Search Books</h1>
          <p className="slogan">Search by title, author, or category</p>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Type here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <div className="results-container">
            {results.length > 0 ? (
              results.map((book) => (
                <div key={book.id} className="book-card">
                  <h3>{book.title}</h3>
                  <p className="tagline"><em>A must-read for {book.category} enthusiasts</em></p>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Category:</strong> {book.category}</p>
                  <p className={book.available ? "available" : "unavailable"}>
                    {book.available ? "Available" : "Not Available"}
                  </p>
                </div>
              ))
            ) : (
              <p className="no-results">No books found. Try searching!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
