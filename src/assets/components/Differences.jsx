import React from "react";

const differences = [
  {
    img: "//colonialcandle.com/cdn/shop/files/CC_Difference_1.jpg?v=1741624439&width=1080",
    alt: "Candle flame logo",
    title: "Over 110 Years of Excellence",
    text: "Founded by Mabel Baker in 1909, our candles carry a legacy of over a century of craftsmanship."
  },
  {
    img: "//colonialcandle.com/cdn/shop/files/CC_Difference_4.jpg?v=1741624534&width=1080",
    alt: "Premium Quality Colonial candle",
    title: "Premium Ingredients, Trusted Quality",
    text: "Exceptional quality you can trust, with premium wax, 100% cotton wicks, world class manufacturing."
  },
  {
    img: "//colonialcandle.com/cdn/shop/files/CC_Difference_3.jpg?v=1741624512&width=1080",
    alt: "Spices",
    title: "Captivating Scents, Enduring Burntime",
    text: "Experience enchanting fragrances and a long-lasting burn that keeps the magic alive."
  },
  {
    img: "//colonialcandle.com/cdn/shop/files/CC_Difference_2.jpg?v=1741624458&width=1080",
    alt: "USA flag Icon",
    title: "Made in the USA",
    text: "Proudly crafted in the USA, upholding our heritage of American quality."
  }
];

const BoxgleeDifference = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        The Colonial Candle® Difference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {differences.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-4">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="italic text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxgleeDifference;
