import logo from "@/assets/madbzz-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="Madbzz" className="h-16 w-auto" />
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Madbzz. Elevating brands through digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
