import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring the latest trends and technologies shaping modern web development",
      author: "John Doe",
      date: "Jan 15, 2025",
      category: "Web Development",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Building Scalable Mobile Applications",
      excerpt: "Best practices for creating mobile apps that grow with your business",
      author: "Jane Smith",
      date: "Jan 12, 2025",
      category: "Mobile Development",
      gradient: "from-secondary to-tertiary",
    },
    {
      title: "UI/UX Design Principles That Matter",
      excerpt: "Understanding the core principles that make great user experiences",
      author: "Mike Johnson",
      date: "Jan 10, 2025",
      category: "Design",
      gradient: "from-tertiary to-primary",
    },
    {
      title: "Cloud Computing: A Complete Guide",
      excerpt: "Everything you need to know about leveraging cloud technologies",
      author: "Sarah Williams",
      date: "Jan 8, 2025",
      category: "Cloud",
      gradient: "from-primary via-secondary to-tertiary",
    },
    {
      title: "Microservices Architecture Explained",
      excerpt: "Understanding the benefits and challenges of microservices",
      author: "David Brown",
      date: "Jan 5, 2025",
      category: "Architecture",
      gradient: "from-secondary via-tertiary to-primary",
    },
    {
      title: "AI and Machine Learning in Business",
      excerpt: "How AI is transforming the way businesses operate and grow",
      author: "Emily Davis",
      date: "Jan 3, 2025",
      category: "AI/ML",
      gradient: "from-tertiary via-primary to-secondary",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-tertiary/25 blur-3xl"
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and industry updates from our team of experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-hover rounded-3xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-white/90 font-bold text-xl">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1 text-secondary" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-secondary/10"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
