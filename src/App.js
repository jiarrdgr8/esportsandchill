import Navbar from "./Components/Navbar.js";
import Left from "./Components/Left.js";
import Center from "./Components/Center.js";
import Right from "./Components/Right.js";

function App() {
  return (
    <div className="bg-gray-900 sm:h-screen">
      <div>
        <Navbar />
      </div>
        
        <div className=" flex md:min-h-screen max-w-[1240px] mx-auto my-10 justify-center items-start">
          <div className="bg-pink-500 sm:min-h-full w-3/12 border border-gray-400">
            <Left />
          </div>
          <div className="bg-pink-500 sm:min-h-full flex-grow border border-gray-400">
            <Center />
          </div>
          <div className="bg-pink-500 sm:min-h-full w-3/12 border border-gray-400 flex flex-col justify-start align-middle">
            <div className="flex">
              <div>Match Ticker</div>
              <div>Schedule</div>
              <div>Results</div>
            </div>
            <Right />
          </div>
        </div>
    </div>
  )
}

export default App;
