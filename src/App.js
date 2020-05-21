import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
import {
    // here must be the webs icons that needed to reach out to me like facebook github and so
} from '@fortawesome/free-brands-svg-icons';
import NavigationBar from "./components/NavigationBar/NavigationBar";

//add imported icons to global library to make them available wherever the FontAwesomeIcon component is imported
library.add(
    faUser
);


function App() {
    return (
        <div className="App">
            <NavigationBar />
        </div>
    );
}

export default App;
