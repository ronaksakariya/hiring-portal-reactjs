import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companies";

const CompanyBanner = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="-ml-4">
        {companies.map((value, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
          >
            <div className="flex items-center justify-center p-4">
              <img
                src={value.path}
                alt={value.name}
                className="h-9 opacity-80 object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyBanner;
