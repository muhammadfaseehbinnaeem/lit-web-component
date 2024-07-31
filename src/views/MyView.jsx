import React, { useEffect, useState } from 'react';
import MyComponent from '../components/MyComponent';


const MyView = () => {
    let [viewState, setViewState] = useState('');

    useEffect(() => setViewState('View State'), []);

    return (
        <div className='main-container'>
            <div className='view'>
                <h3>Hello from View!</h3>
                <p>{viewState}</p>
            </div>
            <MyComponent />
        </div>
    );
};


export default MyView;