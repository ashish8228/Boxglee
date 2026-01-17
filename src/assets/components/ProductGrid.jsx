import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Plus, Minus, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate add to cart
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
        <a href={product.url} className="block h-full">
          {/* Main Image */}
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.slice(0, 3).map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full ${
                  idx === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              />
            ))}
            {product.images.length > 3 && (
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            )}
          </div>
        </a>
      </div>

      {/* Product Details */}
      <div className="space-y-3">
        <a href={product.url} className="block">
          <h5 className="font-medium text-gray-900 hover:text-gray-700">
            {product.title}
          </h5>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-semibold">{product.price}</span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.comparePrice}
              </span>
            )}
          </div>
          {product.promotion && (
            <p className="text-red-600 text-sm mt-1">{product.promotion}</p>
          )}
          {product.rating && (
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400'
                        : 'fill-gray-300'
                    }`}
                    viewBox="0 0 13 13"
                  >
                    <path d="M8.43579 4.9459L13.63 4.9536L9.42653 8.01929L11.0329 12.97L6.81981 9.91778L2.60673 12.97L4.20346 8.01929L0 4.9536L5.20383 4.9459L6.81981 0L8.43579 4.9459Z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-600">
                {product.rating} / 5.0
              </span>
              {product.reviewCount && (
                <span className="text-xs text-gray-500">
                  {product.reviewCount} reviews
                </span>
              )}
            </div>
          )}
        </a>

        {/*Add to Cart */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="flex-1 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Valentine's White Taper Candles, 10 inch, 2 pack",
      price: "$8.00",
      comparePrice: "$10.00",
      promotion: "🤍 White candles = forever vibes",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129994_lifestyle2.jpg?v=1768647112&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129994_5.png?v=1768647112&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129994_1.png?v=1768647112&width=1000",
      ],
    },
    {
      id: 2,
      title: "Valentine's Red Taper Candles, 10 inch, 2 pack",
      price: "$8.00",
      promotion: "RED, obviously 💘",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129982_lifestyle1.jpg?v=1768584137&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129982_1.jpg?v=1768584137&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129982_5.jpg?v=1768584137&width=1000",
      ],
    },
    {
      id: 3,
      title: "Valentine's Pink Taper Candles, 10 inch, 2 pack",
      price: "$8.00",
      promotion: "PINK is the moment",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129983_lifestyle2.jpg?v=1768584129&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129983_1.jpg?v=1768584129&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129983_3.jpg?v=1768584129&width=1000",
      ],
    },
    {
      id: 4,
      title: "Gardenia Blush, 1909 Collection",
      price: "$50.00",
      promotion: "Buy 1 Get 1 FREE, Limited time!",
      rating: 4.95,
      reviewCount: 40,
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/125872_1_5e9aabd6-c42c-4b82-8292-46a1dc2ee968.jpg?v=1739988891&width=1000",
        "https://colonialcandle.com/cdn/shop/files/125872_lifestyle-4.jpg?v=1739988891&width=1000",
        "https://colonialcandle.com/cdn/shop/files/125872_2.jpg?v=1709435829&width=1000",
      ],
    },
    {
      id: 5,
      title: "Berry in Love, Triple-Layer Romance Candle",
      price: "$12.00",
      promotion: "Sweet, flirty 💖, and made to fall for",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129980_lifestyle2.jpg?v=1767708799&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129980_1back.jpg?v=1767871691&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129980_FragranceNotes.jpg?v=1767871691&width=1000",
      ],
    },
    {
      id: 6,
      title: "Love You FOREVER, 3-wick candle",
      price: "$10.00",
      promotion: "Cherry dessert energy 🍒",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129978_lifestyle1.jpg?v=1767112319&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129978_2.jpg?v=1767112319&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129978_FragranceNotes.jpg?v=1767112319&width=1000",
      ],
    },
    {
      id: 7,
      title: "XOXO Kisses & Hugs, 3-wick candle",
      price: "$10.00",
      promotion: "Strawberry sugar vibes 🍓💖",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129979_lifestyle1.jpg?v=1767116283&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129979_FragranceNotes.jpg?v=1767116283&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129979_1.jpg?v=1767116283&width=1000",
      ],
    },
    {
      id: 8,
      title: "Hearts A Bloom, Triple-Layer Romance Candle",
      price: "$12.00",
      promotion: "Romance, layered beautifully 💕",
      url: "#",
      images: [
        "https://colonialcandle.com/cdn/shop/files/129981_lifestyle1.jpg?v=1767867800&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129981_1back.jpg?v=1767871643&width=1000",
        "https://colonialcandle.com/cdn/shop/files/129981_FragranceNotes.jpg?v=1767871643&width=1000",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;