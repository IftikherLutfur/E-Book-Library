import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useGetBooksQuery } from "../../redux/api/baseApi";
import type IBook from "../../types";
import { Link } from "react-router";

export default function HomePage() {

  const { data, isLoading, isError } = useGetBooksQuery({ limit: 1000 });
  console.log({ data, isLoading, isError });

  // FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY
  // const books = data?.data || [];

  const books: IBook[] = data?.data || [];
  const History = books.filter((book: IBook) => book.genre === "HISTORY");
  console.log(History);

  const Fiction = books.filter((book: IBook) => book.genre.toUpperCase() === "FICTION");
  console.log(Fiction);

  const Science = books.filter((book: IBook) => book.genre === "SCIENCE")
  console.log(Science);

  const Biography = books.filter((book: IBook) => book.genre === "BIOGRAPHY")
  console.log(Biography);

  const nonFinction = books.filter((book: IBook) => book.genre === "NON_FICTION")
  console.log(nonFinction);

  const Fantasy = books.filter((book: IBook) => book.genre === "FANTASY")
  console.log(Fantasy);

  if (isLoading) {
    <h1>Loading...</h1>
  }

  return (
    <div className=" text-gray-800">

      {/* Banner */}
      <section className="max-w-screen-xl my-5 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            MEET YOUR NEXT <br className="hidden sm:block" /> FAVOURITE BOOK
          </h1>
         <Link to={"/books"}> <button className="bg-sky-800 hover:bg-sky-700 text-white text-lg font-semibold py-2 px-4 rounded-md w-full sm:w-auto">
            Explore
          </button></Link>
          <p className="text-lg mt-3 font-semibold text-gray-600 dark:text-gray-700">
            “One child, one teacher, one book, one pen can change the world.”
          </p>
        </div>
      </section>

      {/* Filter by Genre */}

      <section className=" pb-16 pt-10 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Filtered by Genre</h2>


        <Tabs>
          <TabList className={"flex gap-3 justify-start overflow-x-auto px-2 pb-2 scrollbar-hide"}>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">History</button></Tab>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Fiction</button></Tab>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Science</button></Tab>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Biography</button></Tab>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Non-Fiction</button></Tab>
            <Tab><button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-2 px-3 rounded-md w-full lg:w-auto">Fentasy</button></Tab>

          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
              {Fiction?.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
              ) : (
                Fiction?.map((book: IBook) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
              {Science?.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
              ) : (
                Science?.map((book: IBook) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
              {Biography?.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
              ) : (
                Biography?.map((book: IBook) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
              {nonFinction?.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
              ) : (
                nonFinction?.map((book: IBook) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
              {Fantasy?.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 font-medium">No Data Added</p>
              ) : (
                Fantasy?.map((book: IBook) => (
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

      {/* About section */}

      <div className="py-8 px-4 sm:px-6 lg:px-20 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our E-Book Platform</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to <span className="text-blue-600 font-semibold">E Book</span>, your go-to digital destination for reading and discovering e-books across all genres.
            We aim to provide an accessible, flexible, and immersive reading experience for every kind of reader.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Browse thousands of e-books, filter by your favorite genres, and start reading instantly—anytime, anywhere.
            Whether you're into fiction, science, biography, or fantasy, we've got something for everyone. Start your digital reading journey today!
          </p>
        </div>
      </div>


      {/* Newsletter */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl mx-auto text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates about new books, features, and offers.
          </p>
        </div>
        <div>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Newsletter */}


    </div>
  );
}
