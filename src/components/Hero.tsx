import { Button } from "@/components/ui/button";
import logo from "@/assets/madbzz-logo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,165,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Digital Marketing That
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Drives Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We craft data-driven digital strategies that amplify your brand and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all text-lg px-8 py-6">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;