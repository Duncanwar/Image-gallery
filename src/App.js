import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Image from "./Image";

const images = [
  "https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717443807128-13fe2a3d2bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1606486544554-164d98da4889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675334944332-a99805cedc90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D"
];
function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= images.length ? 0 : nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const backIndex = prevIndex - 1;
      return prevIndex < 0 ? images.length - 1 : backIndex;
    });
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="App">
      <Image
        src={images[currentImageIndex]}
        alt="Image"
        isFullScreen={isFullScreen}
        onFullscreenToggle={toggleFullScreen}
      />
      <Navigation onNext={handleNextImage} onPrev={handlePrevImage} />
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={toggleFullScreen}>
          <img src={images[currentImageIndex]} alt="on its way" />
        </div>
      )}
    </div>
  );
}

export default App;
