import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      description: "Patient management and telemedicine application",
      tech: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-secondary to-tertiary",
    },
    {
      title: "CRM Dashboard",
      category: "Web Application",
      description: "Customer relationship management system",
      tech: ["Next.js", "PostgreSQL", "TailwindCSS"],
      gradient: "from-tertiary to-primary",
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Real-time food ordering and delivery platform",
      tech: ["Flutter", "Node.js", "Socket.io"],
      gradient: "from-primary via-secondary to-tertiary",
    },
    {
      title: "Social Media Platform",
      category: "Full Stack",
      description: "Community-driven social networking application",
      tech: ["React", "Express", "GraphQL"],
      gradient: "from-secondary via-tertiary to-primary",
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time business intelligence platform",
      tech: ["Vue.js", "Python", "D3.js"],
      gradient: "from-tertiary via-primary to-secondary",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-tertiary/25 blur-3xl"
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
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-hover rounded-3xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full glass"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-secondary/10"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
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

export default Projects;
