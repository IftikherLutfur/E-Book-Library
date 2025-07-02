// BookTable.tsx

import type IBook from "../../types";


interface BookTableProps {
  books: IBook[];
  onEdit: (book: IBook) => void;
  onDelete: (book: IBook) => void;
  onBorrow: (book: IBook) => void;
}

export default function BookTable({ books, onEdit, onDelete, onBorrow }: BookTableProps) {
  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
      <h2 className="mb-3 text-2xl font-semibold leading-tight">Books</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="rounded-t-lg dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Copies</th>
              <th className="p-3">Available</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={book._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100"
              >
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{book.title}</td>
                <td className="px-3 py-2">{book.author}</td>
                <td className="px-3 py-2">{book.genre}</td>
                <td className="px-3 py-2">{book.copies}</td>
                <td className="px-3 py-2">
                  {book.available ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-600 font-medium">No</span>
                  )}
                </td>
                <td className="px-3 py-2 space-x-2">
                  <button
                    onClick={() => onEdit(book)}
                    className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(book)}
                    className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onBorrow(book)}
                    disabled={!book.available}
                    className={`px-2 py-1 text-white rounded ${
                      book.available ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Borrow
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
