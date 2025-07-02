export default function Navbar() {
return (
    <>
    
    <div className="py-5 px-5 flex items-center justify-between bg-[#fff]">
        <div className="">
            <h1 className="text-2xl font-semibold" >EBook</h1>
        </div>
        <ul className="flex font-bold gap-10 justify-end mx-3">
            <li>All Books</li>
            <li>Add Books</li>
            <li>Borrow Books</li>
        </ul>
    </div>
    
    
    </>
)
}