import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">WEBDECKS</h1>
        <p className="text-gray-600 mb-6 text-center max-w-xs">
          Welcome to the absurdly long named Web3 and Blockchain Development
          Mastermind Group!
        </p>
        <a
          href="https://github.com/"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <i className="fab fa-github mr-2"></i> Visit our Github
        </a>
      </div>
    </div>
  );
}

export default App;
