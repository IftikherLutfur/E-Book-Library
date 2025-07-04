import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useGetBooksQuery } from "../../redux/api/baseApi";
import type IBook from "../../types";

export default function HomePage() {

  const { data, isLoading, isError } = useGetBooksQuery();
  console.log({ data, isLoading, isError })

  // FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY

  const History = data?.data?.filter(category => category.genre === "HISTORY")
  console.log(History)
  const Fiction = data?.data?.filter(category => category.genre === "FICTION")
  console.log(Fiction)
  const Science = data?.data?.filter(category => category.genre === "SCIENCE")
  console.log(Science)
  const Biography = data?.data?.filter(category => category.genre === "BIOGRAPHY")
  console.log(Biography)
  const nonFinction = data?.data?.filter(category => category.genre === "NON_FICTION")
  console.log(nonFinction)
  const Fantasy = data?.data?.filter(category => category.genre === "FANTASY")
  console.log(Fantasy)

  if (isLoading) {
    <h1>Loading...</h1>
  }

  return (
    <div className=" text-gray-800">

      {/* Banner */}
      <section className="max-w-screen-xl my-5 mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left - Image */}
        <div className="w-full">
          <img
            src="http://i.ibb.co/3mWPb9f8/Background-2025-07-04-T040441-845.png"
            alt="Books Banner"
            className="rounded-2xl w-full"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center lg:text-left space-y-6">
          <h3 className="text-xl text-sky-800 font-medium">Every man must read 40 books</h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            MEET YOUR NEXT <br className="hidden md:block" /> FAVOURITE BOOK
          </h1>
          <button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">
            Explore
          </button>
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-700">
            “One child, one teacher, one book, one pen can change the world.”
          </p>
        </div>
      </section>

      {/* Filter by Genre */}

      <section className=" py-10 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Browse by Genre</h2>

        
        <Tabs>
    <TabList className={"flex gap-3"}>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">History</button></Tab>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Fiction</button></Tab>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Science</button></Tab>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Biography</button></Tab>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Non-Fiction</button></Tab>
      <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Fentasy</button></Tab>
    
    </TabList>

    <TabPanel>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
  {History?.map((history: IBook) => (
    <div
      key={history._id}
      className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
          {history.genre.replace("_", " ")}
        </span>
        <span className="text-gray-500 text-xs">Copies: <span className="font-semibold text-sky-800">{history.copies}</span></span>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">{history.title}</h2>

      <p className="text-gray-600 text-sm">{history.description}</p>
    </div>
  ))}

      </div>
    </TabPanel>

    <TabPanel>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
    {Fiction?.length === 0 ? (
      <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
    ) : (
      Fiction.map((book: IBook) => (
        <div
          key={book._id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
              {book.genre.replace("_", " ")}
            </span>
            <span className="text-gray-500 text-xs">
              Copies: <span className="font-semibold text-sky-800">{book.copies}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-600 text-sm">{book.description}</p>
        </div>
      ))
    )}
  </div>
</TabPanel>

    <TabPanel>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
    {Science?.length === 0 ? (
      <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
    ) : (
      Science.map((book: IBook) => (
        <div
          key={book._id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
              {book.genre.replace("_", " ")}
            </span>
            <span className="text-gray-500 text-xs">
              Copies: <span className="font-semibold text-sky-800">{book.copies}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-600 text-sm">{book.description}</p>
        </div>
      ))
    )}
  </div>
</TabPanel>

    <TabPanel>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
    {Biography?.length === 0 ? (
      <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
    ) : (
      Biography.map((book: IBook) => (
        <div
          key={book._id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
              {book.genre.replace("_", " ")}
            </span>
            <span className="text-gray-500 text-xs">
              Copies: <span className="font-semibold text-sky-800">{book.copies}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-600 text-sm">{book.description}</p>
        </div>
      ))
    )}
  </div>
</TabPanel>

   <TabPanel>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
    {nonFinction?.length === 0 ? (
      <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
    ) : (
      nonFinction.map((book: IBook) => (
        <div
          key={book._id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
              {book.genre.replace("_", " ")}
            </span>
            <span className="text-gray-500 text-xs">
              Copies: <span className="font-semibold text-sky-800">{book.copies}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-600 text-sm">{book.description}</p>
        </div>
      ))
    )}
  </div>
</TabPanel>

    <TabPanel>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 mx-auto px-4">
    {Fantasy?.length === 0 ? (
      <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
    ) : (
      Fantasy.map((book: IBook) => (
        <div
          key={book._id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full font-medium">
              {book.genre.replace("_", " ")}
            </span>
            <span className="text-gray-500 text-xs">
              Copies: <span className="font-semibold text-sky-800">{book.copies}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-600 text-sm">{book.description}</p>
        </div>
      ))
    )}
  </div>
</TabPanel>
   
   
  </Tabs>


      </section>
    </div>
  );
}
