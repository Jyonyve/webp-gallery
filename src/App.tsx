// src/App.tsx

import "./App.css";
// App.tsx
import { imageList } from "./assets/imageList";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="gallery">
      <h1>🖼 Tarion Rydell</h1>
      <div className="grid">
        {imageList.map((name) => (
          <img
            key={name}
            src={`/webp-gallery/images/${name}`} // name includes folder like "portraits/img1.webp"
            alt={name}
            onClick={() => setSelected(name)}
          />
        ))}
      </div>
      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <img
            className="preview"
            src={`/webp-gallery/images/${selected}`}
            alt={selected}
          />
        </div>
      )}
    </div>
  );
}

export default App;
