import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Cloud, Brain, Shield, Database, Sparkles } from "lucide-react";

// Micro Icon Components - Simple animated icons
function renderMicroIcon(type: string, gradient: string, index: number) {
  const baseColor = gradient.includes('00d4ff') ? '#00d4ff' : 
                    gradient.includes('b026ff') ? '#b026ff' : 
                    gradient.includes('00ffff') ? '#00ffff' : '#ff00ff';
  
  const iconSize = 14;
  // Use index to determine animation type for consistency
  const animations = ['micro-icon-float', 'micro-icon-pulse', 'micro-icon-bounce', 'micro-icon-rotate'];
  const animClass = animations[index % animations.length];
  
  // Simple SVG icons with animations
  const iconPaths: Record<string, string> = {
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    mobile: "M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01",
    cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
    brain: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2 22",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    database: "M21 5c0 1.1-3.9 2-9 2S3 6.1 3 5s3.9-2 9-2 9 .9 9 2z"
  };
  
  return (
    <motion.svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      className={animClass}
      style={{ color: baseColor }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 2 + (index * 0.3),
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.path
        d={iconPaths[type] || iconPaths.code}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ 
          pathLength: [0.5, 1, 0.5],
        }}
        transition={{ 
          duration: 2 + (index * 0.3),
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive and high-performance websites built using .NET, Angular and other modern frameworks — designed for speed, security and long-term scalability.",
      gradient: "from-[#00d4ff] to-[#00ffff]",
      glow: "rgba(0, 212, 255, 0.5)",
      borderColor: "rgba(0, 212, 255, 0.3)",
      pulseClass: "neon-pulse-blue",
      microIcon: "code",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Clean, user-friendly Android/iOS apps developed with seamless backend integration and smooth performance.",
      gradient: "from-[#b026ff] to-[#ff00ff]",
      glow: "rgba(176, 38, 255, 0.5)",
      borderColor: "rgba(176, 38, 255, 0.3)",
      pulseClass: "neon-pulse-purple",
      microIcon: "mobile",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deployments on AWS, Azure, GCP or modern hosting setups — with CI/CD pipelines, secure environments and cost-efficient configurations.",
      gradient: "from-[#00ffff] to-[#00d4ff]",
      glow: "rgba(0, 255, 255, 0.5)",
      borderColor: "rgba(0, 255, 255, 0.3)",
      pulseClass: "neon-pulse-cyan",
      microIcon: "cloud",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Integrate practical GenAI features like chatbots, data extraction tools and automation scripts to reduce manual work and increase productivity.",
      gradient: "from-[#ff00ff] to-[#b026ff]",
      glow: "rgba(255, 0, 255, 0.5)",
      borderColor: "rgba(255, 0, 255, 0.3)",
      pulseClass: "neon-pulse-magenta",
      microIcon: "brain",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Secure your digital assets with SSL, authentication setups, safe deployments and best security practices for small businesses.",
      gradient: "from-[#00d4ff] to-[#b026ff]",
      glow: "rgba(0, 212, 255, 0.5)",
      borderColor: "rgba(0, 212, 255, 0.3)",
      pulseClass: "neon-pulse-blue",
      microIcon: "shield",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Custom dashboards and reports that convert raw data into insightful, easy-to-understand business intelligence.",
      gradient: "from-[#b026ff] to-[#ff00ff]",
      glow: "rgba(176, 38, 255, 0.5)",
      borderColor: "rgba(176, 38, 255, 0.3)",
      pulseClass: "neon-pulse-purple",
      microIcon: "database",
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop')",
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
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6 neon-glow-purple"
          >
            <Sparkles className="h-4 w-4 text-[#b026ff]" />
            <span className="text-[#b026ff] uppercase tracking-wide text-sm font-semibold">Our Services</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            End-to-End IT Services for Your Business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const gradientColor = service.gradient.includes('00d4ff') ? '#00d4ff' : 
                                  service.gradient.includes('b026ff') ? '#b026ff' : 
                                  service.gradient.includes('00ffff') ? '#00ffff' : '#ff00ff';
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${gradientColor}, transparent)` 
                  }}
                />
                
                {/* Main Card */}
                <div 
                  className={`relative glass rounded-3xl p-8 h-full border-2 transition-all duration-300 service-card-hover group-hover:${service.pulseClass} white-accent-border`}
                  style={{
                    '--border-color': service.borderColor,
                    '--glow-color': service.glow,
                    '--gradient-color': gradientColor,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  } as React.CSSProperties}
                >
                  {/* Micro Icons Container */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-60">
                    {renderMicroIcon(service.microIcon, service.gradient, index)}
                    {renderMicroIcon(service.microIcon, service.gradient, index + 1)}
                  </div>
                  
                  {/* Main Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative z-10`}
                    style={{
                      boxShadow: `0 0 30px ${service.glow}, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                    }}
                  >
                    <service.icon className="h-10 w-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white relative z-10 border-b border-white/10 pb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-2 text-[#00d4ff] group-hover:text-[#00ffff] transition-colors">
                      <span className="text-sm font-semibold">Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
