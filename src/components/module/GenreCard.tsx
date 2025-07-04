// src/components/GenreCards.jsx

export default function GenreCards({ books }) {
  if (!books?.length) {
    return <p>No books available in this genre.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {books.map((book) => (
        <div key={book.isbn} className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-bold">{book.title}</h2>
          <p className="text-sm text-gray-700">Author: {book.author}</p>
          <p className="text-sm text-gray-500">{book.description}</p>
        </div>
      ))}
    </div>
  );
}
