import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "../../redux/api/baseApi";

export default function AddBooks() {
  const { register, handleSubmit, reset } = useForm();
  
  const [createBook, {data, isLoading, isError} ] = useCreateBookMutation();
  console.log({data, isLoading, isError})

  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data
    }

    const res = await createBook(bookData).unwrap();
    console.log("Post data", res);
    

    console.log(data);
     reset();
  };



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
            {...register("title")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Author */}

<div>
          <label htmlFor="Author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            placeholder="Add the author name"
            {...register("author")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Genre */}
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            {...register("genre")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="FICTION">Fiction</option>
            <option value="HISTORY">History</option>
            <option value="SCIENCE">Science</option>
            <option value="NON_FICTION">Non Fiction</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>

        {/* ISBN */}

<div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            ISBN
          </label>
          <input
            type="text"
            placeholder="Add a isbn"
            {...register("isbn")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Description */}

<div>
          <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            placeholder="Add a description"
            {...register("description")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Copies */}

<div>
          <label htmlFor="Copies" className="block text-sm font-medium text-gray-700">
            Copies
          </label>
          <input
            type="number"
            placeholder="Add the Copies"
            {...register("copies")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Available */}


 <div>
          <label htmlFor="Available" className="block text-sm font-medium text-gray-700">
            Available
          </label>
          <select
            {...register("available")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-block rounded-md bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
