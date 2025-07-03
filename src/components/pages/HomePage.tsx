export default function HomePage() {
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
          <button className="bg-sky-800 hover:bg-sky-700 transition-colors text-white text-lg font-semibold py-3 px-6 rounded-md w-full lg:w-auto">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Example Genre Card */}
          <div className="relative h-96 bg-center bg-cover rounded-xl overflow-hidden shadow-md" style={{ backgroundImage: "url('https://source.unsplash.com/600x800/?books')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
            
            <div className="absolute top-4 left-4 flex items-center justify-between w-full pr-4">
              <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded">Politics</span>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">04</p>
                <p className="uppercase text-xs text-gray-600">Aug</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-md font-medium text-gray-800 hover:underline">
                Autem sunt tempora mollitia magnam non voluptates
              </h3>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
