import "./App.css";
import Picture from "./components/nft";
import Text from "./components/text";
import Author from "./components/author";
import Balance from "./components/balance";
function App() {
  return (
    <div className="body">
      <div className="App">
        <div className="Card">
          <Picture />
          <Text />
          <Balance />
          <Author />
        </div>
      </div>
    </div>
  );
}

export default App;
