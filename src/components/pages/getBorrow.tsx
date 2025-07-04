import { useGetBorrowQuery } from "../../redux/api/baseApi"

export default function GetBorrow() {
  const { data, isLoading, isError } = useGetBorrowQuery(undefined)
  console.log({data, isLoading, isError})
//   if (isLoading) {
//     return <h1>Loading......</h1>
//   }

//   if (isError) {
//     return <h1>Something went wrong!</h1>
//   }

  return (
    <div>
      <div className="my-5">
        {/* <BookTable books={data?.data || []}  */}
          
         <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
      <h2 className="mb-3 text-2xl font-semibold leading-tight">Borrow Books</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="rounded-t-lg dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Quantity</th>
             
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((book, index)=> (
              <tr
                key={book._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100"
              >
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{book.book.title}</td>
                <td className="px-3 py-2">{book.book.isbn}</td>
                <td className="px-3 py-2">{book.totalQuantity}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
        
        {/* /> */}
      </div>
    </div>
  )
}
