import CompanyBanner from "@/components/CompanyBanners/CompanyBanner";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20 py-20 items-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-8xl font-extrabold flex flex-col items-center text-gray-300">
          Find Your Dream Job
          <span className="flex gap-6 items-center text-white ">
            and get <img src="logo.png" alt="logo" className="h-28" />
          </span>
        </h1>
        <p className="text-2xl">
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

      <img src="banner.jpeg" alt="banner" />

      <div>
        <Features />
      </div>
    </div>
  );
};

export default LandingPage;
