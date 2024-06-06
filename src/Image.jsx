import React from 'react';

function Image({src,alt,isFullscreen, onFullscreenToggle}) {
    return (
        <div className='image-container'>
            <img src={src} alt={alt} onClick={onFullscreenToggle} />
            {isFullscreen && <button oncClick={onFullscreenToggle}>Close FullScreen</button>}
        </div>
    );
}

export default Image;