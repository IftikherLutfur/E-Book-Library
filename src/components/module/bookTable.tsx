import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import {
  useCreateBorrowMutation,
  useDeleteTaskMutation,
  useUpdateBookMutation,
} from "../../redux/api/baseApi";
import type IBook from "../../types";
import type { IBorrow } from "../../types";

interface BookTableProps {
  books: IBook[];
}

export default function BookTable({ books }: BookTableProps) {
  const [createBorrow, { isLoading }] = useCreateBorrowMutation();
  const [updateBook] = useUpdateBookMutation();
  const [deleteBook] = useDeleteTaskMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBorrow>();

  const {
    register: registerEdit,
    handleSubmit: handleEditSubmit,
    reset: resetEdit,
  } = useForm<IBook>();

  const handleForAddBorrow = (data: IBorrow) => {
    if (!selectedBook) return;
    const borrowPayload = {
      book: selectedBook._id,
      quantity: data.totalQuantity,
      dueDate: data.dueDate,
    };
    createBorrow(borrowPayload)
      .unwrap()
      .then(() => {
        reset();
        setIsOpen(false);
        toast.success("Borrowed Successfully!");
      })
      .catch(() => toast.error("Failed to borrow"));
  };

  const handleUpdate = (data: IBook) => {
    if (!selectedBook) return;
    const updateData = {
  title: data.title,
  author: data.author,
  genre: data.genre,
  isbn: data.isbn,
  copies: data.copies,
  description: data.description,
  available: data.copies === 0 ? false : true,
};
    updateBook({ bookId: selectedBook._id, updateData })
      .unwrap()
      .then(() => {
        toast.success("Book Updated Successfully!");
        resetEdit();
        setOpen(false);
      })
      .catch(() => toast.error("Book Update Failed"));
  };

  const openBorrowModal = (book: IBook) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const openBookModel = (book: IBook) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleForDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id)
          .unwrap()
          .then(() => toast.success("Successfully Deleted"))
          .catch(() => toast.error("Delete Failed"));
      }
    });
  };

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
              <tr key={book._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{book.title}</td>
                <td className="px-3 py-2">{book.author}</td>
                <td className="px-3 py-2">{book.genre}</td>
                <td className="px-3 py-2">{book.copies}</td>
                <td className="px-3 py-2">{book.available ? <span className="text-green-600 font-medium">Yes</span> : <span className="text-red-600 font-medium">No</span>}</td>
                <td className="px-3 py-2 space-x-2">
                  <button onClick={() => openBookModel(book)} className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700">Edit</button>
                  <button onClick={() => handleForDelete(book._id)} className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700">Delete</button>
                  <button onClick={() => openBorrowModal(book)} disabled={!book.available} className={`px-2 py-1 text-white rounded ${book.available ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}>Borrow</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Borrow Modal */}
      {isOpen && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button onClick={() => { setIsOpen(false); reset(); }} className="absolute top-2 right-3 text-gray-500 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">Borrow: {selectedBook.title}</h2>
            <form onSubmit={handleSubmit(handleForAddBorrow)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Due Date</label>
                <input type="date" {...register("dueDate", { required: "Date is required" })} className="w-full border px-3 py-2 rounded" />
                {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input type="number" {...register("totalQuantity", { required: "Quantity is required", valueAsNumber: true, min: { value: 1, message: "Minimum 1 book required" } })} className="w-full border px-3 py-2 rounded" />
              </div>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">{isLoading ? "Borrowing..." : "Confirm Borrow"}</button>
              <Toaster />
            </form>
          </div>
        </div>
      )}

      {/* Edit Book Modal */}
      {open && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button onClick={() => { setOpen(false); resetEdit(); }} className="absolute top-2 right-3 text-gray-500 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">Edit: {selectedBook.title}</h2>
            <form onSubmit={handleEditSubmit(handleUpdate)} className="space-y-4">

              <input type="text" {...registerEdit("title", { required: "Title is required" })} defaultValue={selectedBook.title} className="w-full border px-3 py-2 rounded" />

              <input type="text" {...registerEdit("author", { required: "Author is required" })} defaultValue={selectedBook.author} className="w-full border px-3 py-2 rounded" />

              <input type="text" {...registerEdit("isbn", { required: "ISBN is required" })} defaultValue={selectedBook.isbn} className="w-full border px-3 py-2 rounded" />

              <input type="text" {...registerEdit("genre", { required: "Genre is required" })} defaultValue={selectedBook.genre} className="w-full border px-3 py-2 rounded" />

              <input type="text" {...registerEdit("description", { required: "Description is required" })} defaultValue={selectedBook.description} className="w-full border px-3 py-2 rounded" />

              <input type="number" {...registerEdit("copies", { required: "Copies is required", valueAsNumber: true })} defaultValue={selectedBook.copies} className="w-full border px-3 py-2 rounded" />

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{isLoading ? "Updating..." : "Update Book"}</button>
              <Toaster />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
