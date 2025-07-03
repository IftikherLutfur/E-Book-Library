import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="">
      <div className="py-5 mt-5 rounded-md px-5 flex items-center justify-between z-10 w-full h-20 text-white">
        <div className="">
          <h1 className="text-3xl font-bold flex items-center">
            <img
              className="h-8 mr-2"
              src="https://i.ibb.co/V0fSJBvv/Background-2025-07-02-T201141-019.png"
              alt="E-Book logo"
            />
            <p className="text-gray-800">Book</p>
          </h1>
        </div>
        <ul className="flex font-semibold gap-5 md:gap-10 justify-end mx-3">
          <li>
            <Link to="/">
              <button className=" text-black text-xl p-2">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/books">
              <button className=" text-black text-xl p-2">
                All Books
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/addBooks"}>
            <button className=" text-black text-xl p-2">
              Add Books
            </button>
            </Link>
          </li>
          <li>
            <Link to={"/borrow"}>
            <button className=" text-black text-xl p-2">
              Borrow Books
            </button>
            </Link>

          </li>
        </ul>
      </div>
    </div>
  );
}
