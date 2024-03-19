import "./App.css";

function App() {
  return (
    <div>
      <p>Tutaj będzie strona SCK</p>
      <span
        className="smile"
        role="img"
        aria-label="smile"
        style={{ fontSize: 30 }}
      >
        {String.fromCodePoint(0x1f600)}
      </span>
    </div>
  );
}

export default App;
