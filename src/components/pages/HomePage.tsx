export default function HomePage() {
  return (
    <div>
        <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b9/ac/16/b9ac160cccaf2b74e93046cd8bc0adeb.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#00000099] to-black opacity-70 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 p-8 rounded-xl max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug drop-shadow-lg">
          40 BOOKS
          EVERY MAN 
          MUST READ
        </h1>
      </div>
    </div>

{/* Filter by genre */}
  <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
	<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        
		<div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover h-96">
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600">Politics</a>
				<div className="flex flex-col justify-start text-center dark:text-gray-800">
					<span className="text-3xl font-semibold leading-none tracking-wide">04</span>
					<span className="leading-none uppercase">Aug</span>
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800"> Autem sunt tempora mollitia magnam non voluptates</a>
			</h2>
		</div>
		
	</div>
</div>

    </div>
  );
}
