import React, { lazy } from "react";

const Home = lazy(() => import("pages/goldPage"));
const bank = lazy(() => import("pages/bankPage"));
const contact = lazy(() => import("pages/contactPage"));
const about = lazy(() => import("pages/aboutPage"));
const enquiry = lazy(() => import("pages/enquiresPage"));

const routes = [
  {
    path: '/',
    name: 'Gold Rate',
    component: Home,
  },
  {
    path: '/bank',
    name: 'Bank',
    component: bank,
  },
  {
    path: '/enquiry',
    name: 'Enquires',
    component: enquiry,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: about,
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: contact,
  },
  
];

export  {routes}
