'use client'

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contacts from './contacts/page';

const Home = () => (
  <Router>
    <Contacts />
  </Router>
);

export default Home;