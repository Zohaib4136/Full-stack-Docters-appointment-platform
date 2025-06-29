import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { creditBenefits, features, testimonials } from "@/lib/data";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Pricing from "@/components/ui/pricing";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="overflow-hidden relative py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sapce-y-8">
              <Badge
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-semibold rounded-lg shadow-md"
                variant="outline"
              >
                Health care made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
                Connect with doctors <br />{" "}
                <span className="gradient-title">anyytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground opacity-70 text-lg md:text-xl my-4 text-opacity-70 max-w-md">
                Book appointments , consult via Video, and manage your health
                records seamlessly with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition-colors duration-300"
                >
                  <Link href={"/"}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-700/30 hover:bg-emerald-900/30 border-emerald-700/30 text-white font-semibold shadow-lg transition-colors duration-300"
                >
                  <Link href={"/doctors"}>
                    Find Doctors <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/banner.png"
                alt="Hero Image"
                layout="responsive"
                priority
                width={700}
                height={475}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-20 bg-muted/30">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground opacity-70 text-lg max-w-2xl mx-auto">
              Our Platform connects patients with healthcare providers
              seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((features, index) => {
              return (
                <Card
                  className="border-emerald-900/20 hover:border-emerald-700 transition-all duration-300"
                  key={index}
                >
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                      {features.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {features.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground opacity-70">
                      {features.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 my-6 text-emerald-400 text-sm font-semibold rounded-lg shadow-md">
              {" "}
              Afordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Pakages
            </h2>
            <p className="text-muted-foreground opacity-70 text-lg max-w-2xl mx-auto">
              Choose from our flexible consultation packages designed to fit
              your healthcare needs.
            </p>
          </div>
          <div>
            <Pricing />
            <Card className="mt-12 bg-muted/30 border-emerald-900/20 hover:border-emerald-700 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" /> How
                  Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="spcae-y-3">
                  {creditBenefits.map((benifit, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-emerald-900/20">
                          <Check className="h-5 w-5 text-emerald-400 mr-2 mt-1" />
                        </div>
                        <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benifit }}
                        ></p>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className=" py-20 bg-muted/30">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 my-6 text-emerald-400 text-sm font-semibold rounded-lg shadow-md">
              {" "}
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground opacity-70 text-lg max-w-2xl mx-auto">
              Hear from our satisfied users about their experience with our
              platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonials, index) => {
              return (
                <Card
                  className="border-emerald-900/20 hover:border-emerald-700 transition-all duration-300"
                  key={index}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900/20 text-emerald-400 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-emerald-400 font-bold">
                          {testimonials.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonials.name}
                        </h4>
                        <p className="text-sm opacity-70">
                          {testimonials.role}
                        </p>
                      </div>
                    </div>
                    <p className="opacity-70 ">
                      &quot;{testimonials.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-500/30 border-emerald-800/20 ">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to take control of your Healthcare
              </h2>
              <p className="opacity-70 text-muted-foreground text-lg mb-6">
                Join us today and experience the future of healthcare. Our
                platform is designed to make healthcare accessible, affordable,
                and convenient for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition-colors duration-300 mt-6"
                >
                  <Link href={"/sign-up"}>
                    Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant={"outline"}
                  className="text-white font-semibold shadow-lg    mt-6"
                >
                  <Link href={"/pricing"}>
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
