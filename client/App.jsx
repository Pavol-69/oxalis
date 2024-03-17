import React from "react";
import "./src/style/CSSGeneral.css"

async function test(e) {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/test/test1", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const parseRes = await response.json();

    console.log(parseRes);

    } catch (err) {
      console.error(err.message);
  }
}

function App() {
  return (
    <div>
      <div className="btn elm_ct" onClick={(e) => test(e)}>Bouton</div>
    </div>
  );
}

export default App;
