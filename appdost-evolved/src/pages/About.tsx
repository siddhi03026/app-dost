import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive growth and create lasting digital impact.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dynamic group of passionate developers, designers, and strategists committed to excellence in every project.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "We maintain the highest standards in code quality, design excellence, and customer satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Our Growth",
      description: "Continuously evolving with the latest technologies to provide innovative solutions for modern challenges.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-tertiary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/25 blur-3xl"
        />
      </div>

      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="gradient-text">App Dost</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for complete digital transformation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-hover p-12 rounded-3xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AppDost is a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, market-ready products. Founded in 2025, we've quickly established ourselves as a trusted partner for businesses looking to embrace digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are passionate about technology and committed to delivering excellence. Our team combines creativity, technical expertise, and business acumen to create solutions that don't just meet expectations—they exceed them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-hover p-8 rounded-3xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-tertiary p-0.5 mb-6">
                  <div className="w-full h-full rounded-2xl bg-background dark:bg-card flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-hover p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Why Choose Us?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't just build software—we build partnerships. Our commitment to understanding your business, combined with our technical expertise and creative approach, ensures that every project we undertake becomes a success story. From initial concept to final deployment and beyond, we're with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
