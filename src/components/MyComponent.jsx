import React, { useEffect, useState } from 'react';


const MyComponent = () => {
    let [componentState, setComponentState] = useState('');

    useEffect(() => setComponentState('Component State'), []);

    return (
        <div className='component'>
            <h3>Hello from Component!</h3>
            <p>{componentState}</p>
        </div>
    );
};


export default MyComponent;