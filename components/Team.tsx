import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Visionary leader with 15+ years in technology",
      gradient: "from-[#00d4ff] to-[#00ffff]",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Tech expert specializing in cloud architecture",
      gradient: "from-[#b026ff] to-[#ff00ff]",
    },
    {
      name: "Amit Patel",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Full-stack developer with passion for innovation",
      gradient: "from-[#00ffff] to-[#00d4ff]",
    },
    {
      name: "Sneha Reddy",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Creative designer with eye for detail",
      gradient: "from-[#ff00ff] to-[#b026ff]",
    },
  ];

  return (
    <section id="team" className="relative py-32 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
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
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6 neon-glow-cyan"
          >
            <Sparkles className="h-4 w-4 text-[#00ffff]" />
            <span className="text-[#00ffff] uppercase tracking-wide text-sm font-semibold">Our Team</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our talented team of professionals is dedicated to delivering exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-2xl transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${member.gradient.includes('00d4ff') ? '#00d4ff' : member.gradient.includes('b026ff') ? '#b026ff' : '#ff00ff'}, transparent)`,
                }}
              />
              <div className="relative glass rounded-3xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105 white-accent-glow">
                {/* Moving Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 gradient-move-${index % 4}`}
                  style={{
                    background: `linear-gradient(135deg, ${member.gradient.includes('00d4ff') ? '#00d4ff' : member.gradient.includes('b026ff') ? '#b026ff' : member.gradient.includes('00ffff') ? '#00ffff' : '#ff00ff'}, transparent)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: [
                      index % 4 === 0 ? '0% 50%' : index % 4 === 1 ? '50% 0%' : index % 4 === 2 ? '0% 0%' : '100% 0%',
                      index % 4 === 0 ? '100% 50%' : index % 4 === 1 ? '50% 100%' : index % 4 === 2 ? '100% 100%' : '0% 100%',
                      index % 4 === 0 ? '0% 50%' : index % 4 === 1 ? '50% 0%' : index % 4 === 2 ? '0% 0%' : '100% 0%',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="aspect-square relative overflow-hidden">
                  {/* Morphing Shape Behind Profile Picture */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.div
                      className="morphing-blob"
                      style={{
                        width: '120%',
                        height: '120%',
                        background: `linear-gradient(135deg, ${member.gradient.includes('00d4ff') ? '#00d4ff' : member.gradient.includes('b026ff') ? '#b026ff' : member.gradient.includes('00ffff') ? '#00ffff' : '#ff00ff'}40, ${member.gradient.includes('00d4ff') ? '#00ffff' : member.gradient.includes('b026ff') ? '#ff00ff' : member.gradient.includes('00ffff') ? '#00d4ff' : '#b026ff'}20)`,
                        filter: 'blur(40px)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                      }}
                      animate={{
                        borderRadius: [
                          '60% 40% 30% 70% / 60% 30% 70% 40%',
                          '30% 60% 70% 40% / 50% 60% 30% 60%',
                          '70% 30% 50% 50% / 30% 50% 70% 50%',
                          '60% 40% 30% 70% / 60% 30% 70% 40%',
                        ],
                        scale: [1, 1.1, 0.9, 1],
                        rotate: [0, 90, 180, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10 w-full h-full">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-3 justify-center">
                        {[
                          { icon: Linkedin, color: "#00d4ff" },
                          { icon: Twitter, color: "#b026ff" },
                          { icon: Mail, color: "#ff00ff" },
                        ].map((social, i) => (
                          <motion.a
                            key={i}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all"
                            style={{
                              boxShadow: `0 0 20px ${social.color}40`,
                            }}
                          >
                            <social.icon className={`h-5 w-5 text-white`} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 glass border-t-2 border-white/20">
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className={`mb-3 font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
