import React from 'react';

function Navigation({onNext, onPrev}) {
    return (
        <div className='navigation'>
            <button onClick={onPrev}>&lt;</button>
            <button onClick={onNext}>&gt;</button>
        </div>
    );
}

export default Navigation;
