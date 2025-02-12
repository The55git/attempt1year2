import { useState } from "react";
import "./App.css";

const phrases = [
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Pookie please",
  "Just think about it",
  "If you say no,I'll be very sad",
  "I'll be very very sad :(",
  "very very very sad :(",
  "very very very very sad :(",
  "very very very very very sad :(",
  "At least have a hug (づ ᴗ _ᴗ)づ♡",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="centered-container" style={{ backgroundColor: "	#FFD580" }}>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <iframe
              src="https://giphy.com/embed/JyTWSr1HdmUPaaLGv6"
              width="480"
              height="270"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>

            <div className="text-container">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Have a great day, beb!
              </span>
            </div>
          </>
        ) : (
          <>
            <iframe
              src="https://giphy.com/embed/TTr3zADf3SiaLQJtcg"
              width="480"
              height="480"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
