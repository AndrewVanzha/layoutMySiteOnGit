'use strict';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Check from './components/check-comp';
import Field from './components/field-comp';

const app = document.getElementById("appl4");
ReactDOM.render (<Field />, app);
