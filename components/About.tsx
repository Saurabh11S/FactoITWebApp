import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, TrendingUp, Sparkles } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "blue" },
    { icon: Award, value: "50+", label: "Awards Won", color: "purple" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "magenta" },
    { icon: Target, value: "1000+", label: "Projects Done", color: "cyan" },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6 neon-glow-blue"
          >
            <Sparkles className="h-4 w-4 text-[#00d4ff]" />
            <span className="text-[#00d4ff] uppercase tracking-wide text-sm font-semibold">About Us</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Leading Technology Solutions Provider
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Reliable. Modern. Built for Your Business.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I provide tailored IT solutions that help businesses enhance their digital presence, automate processes and scale with confidence. With strong hands-on experience in modern frameworks, cloud platforms and AI-driven tools, you get the quality of an experienced developer — without agency-level complications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] via-[#b026ff] to-[#ff00ff] rounded-3xl transform rotate-3 opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
            <div className="relative glass rounded-3xl p-10 border-2 border-white/20 hover:border-[#00d4ff]/40 transition-all duration-300 white-accent-border">
              <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                To deliver simple, effective and scalable digital solutions that help businesses grow faster and operate smarter.
              </p>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a trusted technology partner for entrepreneurs and growing companies seeking reliable and cost-effective development services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              { title: "Innovation First", desc: "We stay ahead of technology trends to deliver innovative solutions that give our clients a competitive edge.", gradient: "from-[#00d4ff] to-[#00ffff]" },
              { title: "Client-Centric Approach", desc: "Your success is our success. We work closely with you to understand and exceed your expectations.", gradient: "from-[#b026ff] to-[#ff00ff]" },
              { title: "Quality Assurance", desc: "We maintain the highest standards of quality in every project we deliver, ensuring reliability and excellence.", gradient: "from-[#ff00ff] to-[#00d4ff]" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass rounded-2xl p-6 border-2 border-white/20 hover:border-[#00d4ff]/40 transition-all duration-300 group hover:scale-105 white-accent-border"
              >
                <div className={`w-1 h-12 bg-gradient-to-b ${item.gradient} rounded-full mb-4 group-hover:shadow-lg`} style={{
                  boxShadow: `0 0 20px ${item.gradient.includes('00d4ff') ? 'rgba(0, 212, 255, 0.5)' : item.gradient.includes('b026ff') ? 'rgba(176, 38, 255, 0.5)' : 'rgba(255, 0, 255, 0.5)'}`,
                }} />
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center border-2 border-white/20 hover:border-[#00d4ff]/40 transition-all duration-300 group hover:scale-105 white-accent-border"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${
                stat.color === "blue" ? "from-[#00d4ff] to-[#00ffff]" :
                stat.color === "purple" ? "from-[#b026ff] to-[#ff00ff]" :
                stat.color === "magenta" ? "from-[#ff00ff] to-[#b026ff]" :
                "from-[#00ffff] to-[#00d4ff]"
              }`}
              style={{
                boxShadow: stat.color === "blue" 
                  ? "0 0 30px rgba(0, 212, 255, 0.5)"
                  : stat.color === "purple"
                  ? "0 0 30px rgba(176, 38, 255, 0.5)"
                  : stat.color === "magenta"
                  ? "0 0 30px rgba(255, 0, 255, 0.5)"
                  : "0 0 30px rgba(0, 255, 255, 0.5)",
              }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00d4ff] via-[#b026ff] to-[#ff00ff] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
