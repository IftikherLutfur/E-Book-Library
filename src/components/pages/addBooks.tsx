import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "../../redux/api/baseApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function AddBooks() {
  const { register, handleSubmit, reset, formState: { errors }, watch,
  setValue, } = useForm();
  const [createBook, { data, isLoading, isError }] = useCreateBookMutation();
  console.log({ data, isLoading, isError })
  const watchCopies = watch("copies"); // get current value of copies field
  const parsedCopies = parseInt(watchCopies) || 0;

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data
    }

    const res = await createBook(bookData).unwrap();
    console.log("Post data", res);
    console.log(data);
    reset();
    toast.success("Book added successfully")
    navigate("/books")
  };

  useEffect(() => {
  const parsed = parseInt(watchCopies);
  if (!isNaN(parsed)) {
    setValue("available", parsed > 0 ? "true" : "false");
  }
}, [watchCopies, setValue]);



  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Add a title"
            {...register("title", {
              required: "Title is required"
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
        </div>

        {/* Author */}

        <div>
          <label htmlFor="Author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            placeholder="Add the author name"
            {...register("author", {
              required: "Author is required"
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">Author is required</p>}
        </div>

        {/* Genre */}
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            {...register("genre", {
              required: "Genre is required",
            })}

            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option value="" disabled selected>Select Genre</option>
            <option value="FICTION">Fiction</option>
            <option value="HISTORY">History</option>
            <option value="SCIENCE">Science</option>
            <option value="NON_FICTION">Non Fiction</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          {errors.genre && <p className="text-red-500 text-sm mt-1">Genre is required</p>}
        </div>

        {/* ISBN */}

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            ISBN
          </label>
          <input
            type="text"
            placeholder="Add a isbn"
            {...register("isbn", {
              required: "ISBN is required"
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.isbn && <p className="text-red-500 text-sm mt-1">ISBN is required</p>}
        </div>


        {/* Description */}

        <div>
          <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            placeholder="Add a description"
            {...register("description", {
              required: "Description is required"
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
        </div>

        {/* Copies */}

        <div>
          <label htmlFor="Copies" className="block text-sm font-medium text-gray-700">
            Copies
          </label>
          <input
            type="number"
            placeholder="Add the Copies"
            {...register("copies", {
              required: "Copies is required",
              valueAsNumber: true,
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
          {errors.copies && (
            <p className="text-red-500 text-sm mt-1">Copies is required</p>
          )}
        </div>

        <input
          type="hidden"
          {...register("available", {
            required: "Availability is required",
          })}
        />

        {/* Available */}


        <div>
          <label htmlFor="Available" className="block text-sm font-medium text-gray-700">
            Available
          </label>
          <select
            {...register("available", {
              required: "Availability is required"
            })}

            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>Select Availability</option>
            <option value="true" disabled={parsedCopies === 0}>true</option>
            <option value="false" disabled={parsedCopies > 0}>false</option>
          </select>
          {errors.available && (
            <p className="text-red-500 text-sm mt-1">Availability is required</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-block rounded-md bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
