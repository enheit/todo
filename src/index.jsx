import React, { Component } from 'react';
import { render } from 'react-dom';

import AppComponent from './components/AppComponent';

// Styles of project
import './sass/index.scss';

render(<AppComponent />, document.querySelector("#app"));
