import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Brand from '../components/brands/Brand';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Category from '../components/category/Category';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brand/>
      <Category/>
    </>
  );
};

export default Home;
