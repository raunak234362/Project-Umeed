import { Button } from "../../pages/index";

const Hero = () => {
  return (
    <section className="min-h-[70vh] md:pt-10 lg:pt-0 bg-blue-800 flex justify-center items-center h-full text-white">
      <main className="container mx-auto px-4 max-sm:py-24 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="space-y-4 text-5xl font-bold leading-tight md:text-6xl">
              <span>Empowering </span>
              <span className="block text-[#FFD700]">Special Lives</span>
              <span>With Special Care</span>
            </h1>

            <p className="max-w-2xl text-lg text-white/90">
              Since 2014, Umeed Kiran has been illuminating paths and
              transforming lives of specially-abled children through
              comprehensive rehabilitation and compassionate care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                Get Involved
              </Button>
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white/10 p-10 rounded-lg backdrop-blur animate-slide-in-right">
            <div className="space-y-2 rounded-lg bg-white/10 p-5 text-center flex items-center justify-center flex-col backdrop-blur">
              <div className="text-3xl font-bold text-[#FFD700]">10+</div>
              <div className="text-sm">Years of Service</div>
            </div>
            <div className="space-y-2 rounded-lg bg-white/10 p-5 text-center flex items-center justify-center flex-col backdrop-blur">
              <div className="text-3xl font-bold text-[#FFD700]">100+</div>
              <div className="text-sm">Lives Touched</div>
            </div>
            <div className="space-y-2 rounded-lg bg-white/10 p-5 text-center flex items-center justify-center flex-col backdrop-blur">
              <div className="text-3xl font-bold text-[#FFD700]">6+</div>
              <div className="text-sm">Therapy Services</div>
            </div>
            <div className="space-y-2 rounded-lg bg-white/10 p-5 text-center flex items-center justify-center flex-col backdrop-blur">
              <div className="text-3xl font-bold text-[#FFD700]">24/7</div>
              <div className="text-sm">Dedicated Care</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
