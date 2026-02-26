import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
      <Card className="bg-[#0d1117] border border-white/10 rounded-2xl flex-1">
        <CardHeader>
          <CardTitle className="text-white text-lg font-bold">
            For Job Seekers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-sm">
            Search and apply for jobs, track applications, and more.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-[#0d1117] border border-white/10 rounded-2xl flex-1">
        <CardHeader>
          <CardTitle className="text-white text-lg font-bold">
            For Employers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-sm">
            Post jobs, manage applications, and find the best candidates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
