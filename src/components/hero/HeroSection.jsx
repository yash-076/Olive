import HeroActions from './HeroActions.jsx'
import SocialProof from './SocialProof.jsx'
import PhoneShowCase from '../showcase/PhoneShowCase.jsx'
import React, { useMemo } from 'react';

function HeroSection() {

  const productData = useMemo(
    () => ({
      1: {
        image: "/product1.webp",
        name: "Organic Bagels",
        brand: "Killer Dave's",
        tagBrand: "Campbells",
        score: "43",
        status: "Avoid",
        thumb: "/product1.webp",
        oliver: "This bread's low score mainly comes from the use of organic expeller pressed canola oil, which is a type of seed oil that can be harmful, along with the presence of organic cane sugar."
      },
      2: {
        image: "/product2.webp",
        name: "Late July Snacks Thin and Crispy Organic Tortilla C...",
        brand: "Late July",
        tagBrand: "Campbells",
        score: "58",
        status: "Limit",
        thumb: "/product2.webp",
        oliver: "This snack's score is primarily affected by the presence of organic sunflower oil and safflower oil, which are considered seed oils and can be less healthy for your family."
      },
      3: {
        image: "/product3.webp",
        name: "Fig and Olive Crackers",
        brand: "Lesley Stowe",
        tagBrand: "Campbells",
        score: "46",
        status: "Avoid",
        thumb: "/product3.webp",
        oliver: "This product's score is influenced by the presence of processed oils and added sugars."
      },
      4: {
        image: "/product4.webp",
        name: "Cacao-nectar Bar, Oregon Peppermint",
        brand: "Honey Mama's",
        tagBrand: "Verified",
        score: "85",
        status: "Excellent",
        thumb: "/product4.webp",
        oliver: "This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut."
      },
      5: {
        image: "/product5.webp",
        name: "Organic Grain Cereal Mix",
        brand: "Nature's Path",
        tagBrand: "Verified",
        score: "72",
        status: "Good",
        thumb: "/product5.webp",
        oliver: "This cereal is formulated with organic grains and minimal added sugars, making it a better choice."
      },
      6: {
        image: "/product6.webp",
        name: "Seeded Granola Bites",
        brand: "Harvest Lane",
        tagBrand: "Verified",
        score: "68",
        status: "Good",
        thumb: "/product6.webp",
        oliver: "This option is more balanced than the duplicate image version, with a simpler ingredient profile and better overall score."
      }
    }),
    []
  );

  const carouselItems = useMemo(
    () => [
      { id: 1, image: "/product1.webp" },
      { id: 2, image: "/product2.webp" },
      { id: 3, image: "/product3.webp" },
      { id: 4, image: "/product4.webp" },
      { id: 5, image: "/product5.webp" },
      { id: 6, image: "/product6.webp" }
    ],
    []
  );

  return (
    <section className="px-4 pb-8 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-10">
      <div className="mx-auto max-w-[980px] text-center">
        <SocialProof />

        <h1 className="mx-auto mt-10 max-w-[840px] text-balance text-7xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#1f2f16] sm:text-6xl lg:mt-14 lg:text-[5rem]">
          The Safest Way to Shop for Groceries
        </h1>

        <p className="mx-auto mt-6 max-w-[700px] text-lg leading-relaxed text-[#5b6652]">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          <br />
          Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
          <br />
          Insights
        </p>

        <HeroActions />

        <PhoneShowCase productData={productData} carouselItems={carouselItems} />
      </div>
    </section>
  )
}

export default HeroSection

