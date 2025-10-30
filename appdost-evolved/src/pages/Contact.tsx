import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@appdost.com",
      href: "mailto:info@appdost.com",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      gradient: "from-secondary to-tertiary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Innovation City",
      href: "#",
      gradient: "from-tertiary to-primary",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your project and bring your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-hover p-8 rounded-3xl text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 mb-4 mx-auto`}>
                  <div className="w-full h-full rounded-2xl bg-background dark:bg-card flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-hover p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Send Us A <span className="gradient-text">Message</span>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    className="glass bg-transparent border-border/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="glass bg-transparent border-border/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  placeholder="Project Discussion"
                  className="glass bg-transparent border-border/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="glass bg-transparent border-border/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-secondary to-tertiary hover:opacity-90 shadow-lg shadow-primary/50 text-lg h-12"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
