import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="">
      <div className="py-5 mt-5 rounded-2xl px-5 flex items-center justify-between fixed z-10 w-full h-20 bg-opacity-60 text-white">
        <div className="">
          <h1 className="text-3xl font-bold flex items-center">
            <img
              className="h-8 mr-2"
              src="https://i.ibb.co/V0fSJBvv/Background-2025-07-02-T201141-019.png"
              alt="E-Book logo"
            />
            Book
          </h1>
        </div>
        <ul className="flex font-bold gap-5 md:gap-10 justify-end mx-3">
          <li>
            <Link to="/">
              <button className="shadow-2xl bg-[#6366F1] p-2 border-1 border-amber-100 rounded-xl">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/books">
              <button className="shadow-2xl bg-[#6366F1] p-2 border-1 border-amber-100 rounded-xl">
                All Books
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/addBooks"}>
            <button className="shadow-2xl bg-[#6366F1] p-2 border-1 border-amber-100 rounded-xl">
              Add Books
            </button>
            </Link>
          </li>
          <li>
            <button className="shadow-2xl bg-[#6366F1] p-2 border-1 border-amber-100 rounded-xl">
              Borrow Books
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
