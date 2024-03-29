import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import {
  FeaturedProducts,
  Services,
  Contact,
  CategoryGrid,
  OccassionGrid,
  TrandingProducts,
  HeroCategories,
  Testimonials,
  BridalProducts,
} from "../components";
import { Helmet } from "react-helmet";
const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <Helmet>
        <title>The Suraj Industries</title>
        <meta name="description" content="The Suraj Ind." />
      </Helmet>
      <Hero />
      <CategoryGrid />
      <TrandingProducts />
      <FeaturedProducts />
      <HeroCategories />
      {/* <BridalProducts /> */}
      {/* <Testimonials /> */}
      {/* <Services />
      <Contact /> */}
    </main>
  );
};

export default HomePage;
