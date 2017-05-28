//It is not html. It is JSX

import React from 'react';
import ReactDom from 'react-dom';
import Global from './components/global';
//all above are default modules



ReactDom.render(
    //<div>React Application!</div>, document.getElementById('root')
    <Global />, document.getElementById('root')
)