import CompanyBanner from "@/components/CompanyBanners/CompanyBanner";
import Features from "@/components/Features";
import MainFaqs from "@/components/MainFaqs";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20 items-center pt-5 pb-10">
      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex flex-col items-center text-center text-gray-300 tracking-tight">
          Find Your Dream Job
          <span className="flex gap-3 sm:gap-6 items-center text-white">
            and get{" "}
            <img
              src="logo.png"
              alt="logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28"
            />
          </span>
        </h1>
        <p className="text-base  md:text-lg lg:text-xl text-center">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </div>

      <div className="flex gap-10">
        <Button variant="blue" size="lg">
          Find Job
        </Button>
        <Button variant="red" size="lg">
          Post a Job
        </Button>
      </div>

      <div>
        <CompanyBanner />
      </div>

      <div className="w-full flex justify-center items-center">
        <img src="banner.jpeg" alt="banner" className="w-full h-full" />
      </div>

      <div className="w-full">
        <Features />
      </div>

      <div className="w-full">
        <MainFaqs />
      </div>
    </div>
  );
};

export default LandingPage;
