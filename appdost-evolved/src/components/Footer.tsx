import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Github, href: "#", label: "Github", color: "hover:text-foreground" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-tertiary blur-lg opacity-75 animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-tertiary p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <span className="text-2xl font-black gradient-text">AD</span>
                  </div>
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl font-black gradient-text">App Dost</h2>
                <p className="text-xs text-primary/70 tracking-wider uppercase">Complete IT Solution</p>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform your ideas into digital reality. We craft innovative solutions that drive growth and create lasting impact in the digital world.
            </p>

            {/* Social Links with Glow Effect */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`relative group`}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  <div className="relative glass w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-all border border-border/50 group-hover:border-primary/50">
                    <social.icon className={`w-5 h-5 ${social.color} transition-colors`} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold">Stay Updated</h3>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass bg-transparent border border-border/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-6 py-2 text-sm font-semibold transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent mr-3" />
              Navigate
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group text-sm"
                  >
                    <ArrowUpRight className="w-0 h-0 group-hover:w-3 group-hover:h-3 mr-0 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-gradient-to-r from-secondary to-transparent mr-3" />
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "Digital Marketing", "Consulting"].map((service) => (
                <li key={service} className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-gradient-to-r from-tertiary to-transparent mr-3" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@appdost.com"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="glass w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-all">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/70 mb-1">Email</p>
                  <p>info@appdost.com</p>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-secondary transition-colors group"
              >
                <div className="glass w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-all">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/70 mb-1">Phone</p>
                  <p>+1 (234) 567-890</p>
                </div>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-sm text-muted-foreground group"
              >
                <div className="glass w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-tertiary/10 transition-all">
                  <MapPin className="w-4 h-4 text-tertiary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/70 mb-1">Location</p>
                  <p>123 Tech Street<br />Innovation City</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 <span className="gradient-text font-semibold">App Dost</span>. All rights reserved. Crafted with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-primary"
              >
                ♥
              </motion.span>
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <span className="text-border">•</span>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <span className="text-border">•</span>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
