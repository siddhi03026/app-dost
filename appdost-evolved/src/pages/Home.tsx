import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Clock, Code2, Smartphone, Palette, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const stats = [
    { icon: Code2, label: "Web Projects", value: "10+", color: "text-primary" },
    { icon: Smartphone, label: "Mobile Apps", value: "4+", color: "text-secondary" },
    { icon: Database, label: "CRM Project", value: "1", color: "text-tertiary" },
    { icon: Sparkles, label: "Founded", value: "2025", color: "text-primary" },
  ];

  const features = [
    { icon: Shield, title: "100% Client Satisfaction", desc: "Your success is our priority" },
    { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security" },
    { icon: Clock, title: "24/7 Support", desc: "Always here when you need us" },
  ];

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that users love",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Code2,
      title: "Web Development",
      desc: "Modern, responsive websites built with latest tech",
      gradient: "from-secondary to-tertiary",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile solutions",
      gradient: "from-tertiary to-primary",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-secondary/40 via-secondary/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-tertiary/30 via-tertiary/15 to-transparent blur-3xl"
        />
        
        {/* Additional Accent Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-primary/30 blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-secondary/30 blur-2xl"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass px-6 py-3 rounded-full inline-flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">Complete IT Solution Provider Since 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl"
            >
              Build the{" "}
              <span className="gradient-text">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Transform your ideas into digital reality. From mobile apps to enterprise software, we bring innovation and excellence to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-tertiary hover:opacity-90 shadow-lg shadow-primary/50 group">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="glass-hover border-2">
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Features Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-3xl"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-hover p-4 rounded-2xl flex items-center space-x-3"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-hover p-8 md:p-12 rounded-3xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                  <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-hover p-8 rounded-3xl group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-background dark:bg-card flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
