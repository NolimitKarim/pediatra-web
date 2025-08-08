import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  className?: string;
}

const Carousel = ({ images, className = "" }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-strong group ${className}`}>
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Text overlay */}
            {(image.title || image.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {image.title && (
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p className="font-body text-sm md:text-base opacity-90">
                    {image.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 glass hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 glass hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Play/pause indicator */}
      <div className="absolute top-4 right-4">
        <div
          className={`w-2 h-2 rounded-full ${
            isAutoPlaying ? "bg-green-400" : "bg-red-400"
          } opacity-70`}
        />
      </div>
    </div>
  );
};

export default Carousel;