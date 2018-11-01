import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './components/Demo';
import ImageGalleryDisplay from './components/ImageGalleryDisplay';
import Loginsample from './components/Loginsample';
import TabExample from './components/TabExample';
import ReactTableTabExample from './components/ReactTableTabExample';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
