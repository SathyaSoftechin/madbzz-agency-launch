import { Target, TrendingUp, Megaphone, PenTool, BarChart3, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Strategy & Planning",
    description: "Comprehensive digital strategies tailored to your business goals and target audience."
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    description: "Data-driven SEO strategies that improve rankings and drive organic traffic."
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engaging social campaigns that build communities and drive conversions."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that resonates with your audience and tells your brand story."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "In-depth analytics and reporting to measure success and optimize performance."
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "ROI-focused campaigns across multiple channels to maximize your marketing spend."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
