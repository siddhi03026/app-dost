import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Database, Cloud, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design Excellence",
      description: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Building robust, scalable applications tailored to your unique business requirements using cutting-edge technologies.",
      features: ["Full-Stack Development", "API Integration", "Custom Solutions", "Maintenance"],
      gradient: "from-secondary to-tertiary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating powerful mobile experiences for iOS and Android platforms that engage users and drive business growth.",
      features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Maintenance"],
      gradient: "from-tertiary to-primary",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Designing and implementing efficient database architectures that ensure data integrity and optimal performance.",
      features: ["Database Design", "Migration", "Optimization", "Backup Solutions"],
      gradient: "from-primary via-secondary to-tertiary",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Leveraging cloud technologies to build scalable, reliable, and cost-effective solutions for modern businesses.",
      features: ["Cloud Migration", "DevOps", "Infrastructure", "Monitoring"],
      gradient: "from-secondary via-tertiary to-primary",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Helping businesses modernize their operations and embrace digital technologies for competitive advantage.",
      features: ["Strategy", "Implementation", "Training", "Support"],
      gradient: "from-tertiary via-primary to-secondary",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl"
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your business and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-hover p-8 rounded-3xl group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-background dark:bg-card flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
