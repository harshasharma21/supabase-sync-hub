import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=400&fit=crop",
    alt: "Organic Products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop",
    alt: "Fresh Arrivals",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=1200&h=400&fit=crop",
    alt: "Special Offers",
  },
];

export const ShopCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full mb-6 md:mb-8"
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative aspect-[3/1] md:aspect-[4/1] overflow-hidden rounded-lg">
              <img
                src={banner.image}
                alt={banner.alt}
                className="object-cover w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};
