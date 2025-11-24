import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import discoveryIcon from "../icons/Discovery.png";
import designBuildIcon from "../icons/DesignBuild.png";
import deployIcon from "../icons/Deploy.png";
import supportIcon from "../icons/Support.png";

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your goals, defining requirements and identifying the right technology approach. Every project starts with a simple, actionable plan.",
      icon: discoveryIcon,
      gradient: "from-[#00d4ff] to-[#00ffff]",
      glow: "rgba(0, 212, 255, 0.5)",
    },
    {
      number: "02",
      title: "Design & Build",
      description: "Your solution is crafted with modern frameworks, clean architecture and scalable best practices — ensuring performance, security and long-term maintainability.",
      icon: designBuildIcon,
      gradient: "from-[#b026ff] to-[#ff00ff]",
      glow: "rgba(176, 38, 255, 0.5)",
    },
    {
      number: "03",
      title: "Deploy & Optimize",
      description: "We handle cloud deployment, CI/CD setup, monitoring and performance tuning so your system runs smoothly, securely and cost-efficiently.",
      icon: deployIcon,
      gradient: "from-[#00d4ff] to-[#00ffff]",
      glow: "rgba(0, 212, 255, 0.5)",
    },
    {
      number: "04",
      title: "Support & Evolve",
      description: "After launch, we continue to refine, enhance and support your product — ensuring it grows with your business and remains future-ready.",
      icon: supportIcon,
      gradient: "from-[#b026ff] via-[#ff00ff] to-[#00d4ff]",
      glow: "rgba(255, 0, 255, 0.5)",
    },
  ];

  return (
    <section id="team" className="relative py-20 md:py-24 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
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
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-5 md:mb-6 neon-glow-blue"
          >
            <Sparkles className="h-4 w-4 text-[#00d4ff]" />
            <span className="text-[#00d4ff] uppercase tracking-wide text-sm font-semibold">Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 text-white">
            How We Deliver Your Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A clear, streamlined and reliable process — from idea to deployment.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl"
                style={{ 
                  background: `linear-gradient(135deg, ${step.gradient.includes('00d4ff') ? '#00d4ff' : '#b026ff'}, transparent)` 
                }}
              />
              
              {/* Card */}
              <div 
                className="relative glass rounded-3xl p-6 md:p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105 white-accent-border h-full"
                style={{
                  boxShadow: `0 0 30px ${step.glow}20`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center relative`}
                    style={{
                      boxShadow: `0 0 30px ${step.glow}, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                    }}
                  >
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain filter drop-shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
