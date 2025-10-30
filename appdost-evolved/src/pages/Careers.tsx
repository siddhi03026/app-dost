import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openings = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hybrid",
      experience: "3+ years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      title: "Mobile App Developer",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      skills: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      experience: "5+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  const benefits = [
    "Competitive Salary",
    "Health Insurance",
    "Remote Work",
    "Learning Budget",
    "Flexible Hours",
    "Team Events",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl"
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-hover p-12 rounded-3xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-2xl text-center"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-2" />
                  <p className="text-sm font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-hover p-8 rounded-3xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-secondary" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-tertiary" />
                          {job.experience}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full glass"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-primary via-secondary to-tertiary hover:opacity-90 lg:w-auto w-full">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
