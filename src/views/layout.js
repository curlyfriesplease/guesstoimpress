import React from 'react';
import { Header } from '../components/header';
import { Outlet } from 'react-router';
import '../App.css';

export const Layout = ({ setPredictions }) => (
  <div className="App">
    <div className="Main dropShadow1">
      <Header setPredictions={setPredictions} />
      <Outlet />
    </div>
  </div>
);
