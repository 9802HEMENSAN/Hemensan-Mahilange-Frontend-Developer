
import './App.css';

function App() {
  return (
    <div  >
      <div className="flex w-full max-w-screen-xl p-4 justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="your-logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-white text-lg font-semibold">Your App</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-white text-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full">
          Sign In
        </button>
      </div>

    </div>
  );
}

export default App;
