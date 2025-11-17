import { Sparkles, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Madbzz</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're passionate about helping businesses thrive in the digital landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Innovation First</h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge tools and strategies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Client Focused</h3>
              <p className="text-muted-foreground">
                Your success is our top priority
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Proven Results</h3>
              <p className="text-muted-foreground">
                Data-driven approach that delivers ROI
              </p>
            </div>
          </div>
          
          <div className="bg-background p-8 rounded-2xl border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              At Madbzz, we believe in the power of creative digital marketing combined with strategic thinking. 
              Our team of experts works tirelessly to understand your brand, your audience, and your goals to 
              deliver campaigns that don't just look good—they perform exceptionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
