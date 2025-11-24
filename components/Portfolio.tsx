import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import commerceImage from "../icons/RecentWork/Commerce.png";
import mobileAppImage from "../icons/RecentWork/MobileApp.png";
import cloudImage from "../icons/RecentWork/Cloud.png";
import aiImage from "../icons/RecentWork/AI.png";
import dataImage from "../icons/RecentWork/Data.png";
import iotImage from "../icons/RecentWork/IoT.png";

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      number: "01",
      title: "Commerce Platform",
      description: "Developed a responsive and feature-rich commerce interface for small businesses. Ensured seamless navigation, secure backend integration and scalable architecture.",
      image: commerceImage,
      gradient: "from-[#00d4ff] to-[#00ffff]",
    },
    {
      number: "02",
      title: "Marketing Mobile App",
      description: "Built a simple, intuitive mobile app for campaign tracking and customer engagement. Includes backend APIs, analytics and a clean UI.",
      image: mobileAppImage,
      gradient: "from-[#b026ff] to-[#ff00ff]",
    },
    {
      number: "03",
      title: "Cloud Migration",
      description: "Helped a client transition their existing application to a secure and scalable cloud environment with optimized performance and reduced hosting costs.",
      image: cloudImage,
      gradient: "from-[#00ffff] to-[#00d4ff]",
    },
    {
      number: "04",
      title: "AI Solutions",
      description: "Created lightweight AI tools such as automated responders, content assistants and data-processing scripts to streamline workflows.",
      image: aiImage,
      gradient: "from-[#ff00ff] to-[#b026ff]",
    },
    {
      number: "05",
      title: "Data Analytics",
      description: "Designed a dashboard solution that provides clear visual insights into customer behavior and business performance metrics.",
      image: dataImage,
      gradient: "from-[#00d4ff] to-[#b026ff]",
    },
    {
      number: "06",
      title: "IoT Smart Home",
      description: "Developed integration components that connect smart devices with cloud-based services, enabling automation and remote interactions.",
      image: iotImage,
      gradient: "from-[#b026ff] to-[#ff00ff]",
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')",
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
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6 neon-glow-magenta"
          >
            <Sparkles className="h-4 w-4 text-[#ff00ff]" />
            <span className="text-[#ff00ff] uppercase tracking-wide text-sm font-semibold">Portfolio</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Recent Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const projectRef = useRef<HTMLDivElement>(null);
            const imageRef = useRef<HTMLDivElement>(null);
            
            // Scroll progress for this project (0 to 1)
            const { scrollYProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "end start"]
            });
            
            // Smooth spring animation with fallback
            const smoothProgress = useSpring(scrollYProgress, {
              stiffness: 100,
              damping: 30,
              restDelta: 0.001
            });
            
            // Parallax speeds - different for each project
            const parallaxSpeed = 0.3 + (index % 3) * 0.2; // 0.3, 0.5, 0.7, 0.3, 0.5, 0.7
            const reverseParallaxSpeed = 0.2 + (index % 2) * 0.15; // 0.2, 0.35, 0.2, 0.35
            
            // Parallax transforms
            const imageY = useTransform(
              smoothProgress,
              [0, 1],
              [50 * parallaxSpeed, -50 * parallaxSpeed]
            );
            const imageX = useTransform(
              smoothProgress,
              [0, 1],
              index % 2 === 0 
                ? [30 * reverseParallaxSpeed, -30 * reverseParallaxSpeed]
                : [-30 * reverseParallaxSpeed, 30 * reverseParallaxSpeed]
            );
            const imageScale = useTransform(
              smoothProgress,
              [0, 0.5, 1],
              [0.8, 1, 0.95]
            );
            const imageOpacity = useTransform(
              smoothProgress,
              [0, 0.3, 0.7, 1],
              [0.5, 1, 1, 0.8]
            );
            const imageRotate = useTransform(
              smoothProgress,
              [0, 1],
              index % 2 === 0 ? [-2, 2] : [2, -2]
            );
            
            // Content animations
            const contentY = useTransform(
              smoothProgress,
              [0, 1],
              [30, -30]
            );
            const contentOpacity = useTransform(
              smoothProgress,
              [0, 0.2, 0.8, 1],
              [0.7, 1, 1, 0.9]
            );
            
            return (
              <motion.div
                key={project.number}
                ref={projectRef}
                initial={{ opacity: 1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 group`}
              >
                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    style={{
                      y: imageY,
                      x: imageX,
                      scale: imageScale,
                      opacity: imageOpacity,
                      rotate: imageRotate,
                    }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30 
                    }}
                    className="relative rounded-3xl overflow-hidden portfolio-image-container"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br opacity-50 blur-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${project.gradient.includes('00d4ff') ? '#00d4ff' : project.gradient.includes('b026ff') ? '#b026ff' : '#ff00ff'}, transparent)`,
                        scale: useTransform(smoothProgress, [0, 1], [1, 1.2]),
                        opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 0.4]),
                      }}
                    />
                    <motion.div 
                      className="relative glass border border-[#00d4ff]/20 p-4 rounded-3xl"
                      style={{
                        borderColor: useTransform(
                          smoothProgress,
                          [0, 0.5, 1],
                          [
                            "rgba(0, 212, 255, 0.1)",
                            "rgba(0, 212, 255, 0.4)",
                            "rgba(0, 212, 255, 0.2)"
                          ]
                        )
                      }}
                    >
                      <motion.div 
                        className="relative rounded-2xl overflow-hidden bg-black"
                        style={{
                          boxShadow: useTransform(
                            smoothProgress,
                            [0, 0.5, 1],
                            [
                              "0 0 0px rgba(0, 212, 255, 0)",
                              "0 20px 60px rgba(0, 212, 255, 0.4)",
                              "0 10px 40px rgba(0, 212, 255, 0.2)"
                            ]
                          )
                        }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                          style={{
                            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.5, 0.7])
                          }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

              <motion.div 
                className={`flex-1 w-full ${index % 2 === 0 ? "md:order-2" : "md:order-1"} portfolio-content-container`}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                style={{
                  y: contentY,
                  opacity: contentOpacity,
                }}
              >
                <motion.div
                  className="glass rounded-3xl p-10 border"
                  style={{
                    borderColor: useTransform(
                      smoothProgress,
                      [0, 0.5, 1],
                      [
                        "rgba(0, 212, 255, 0.1)",
                        "rgba(0, 212, 255, 0.4)",
                        "rgba(0, 212, 255, 0.2)"
                      ]
                    ),
                    boxShadow: useTransform(
                      smoothProgress,
                      [0, 0.5, 1],
                      [
                        "0 0 0px rgba(0, 212, 255, 0)",
                        "0 10px 40px rgba(0, 212, 255, 0.3)",
                        "0 5px 20px rgba(0, 212, 255, 0.2)"
                      ]
                    )
                  }}
                >
                  <motion.div 
                    className={`text-6xl font-bold mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    style={{
                      scale: useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 1]),
                      opacity: contentOpacity,
                    }}
                  >
                    {project.number}
                  </motion.div>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 text-white border-b-2 border-white/20 pb-4"
                    style={{
                      x: useTransform(
                        smoothProgress,
                        [0, 1],
                        index % 2 === 0 ? [30, 0] : [-30, 0]
                      ),
                      opacity: contentOpacity,
                    }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-300 mb-8 leading-relaxed"
                    style={{
                      opacity: useTransform(
                        smoothProgress,
                        [0, 0.3, 1],
                        [0.5, 1, 0.9]
                      ),
                    }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    style={{
                      opacity: useTransform(
                        smoothProgress,
                        [0, 0.4, 1],
                        [0.6, 1, 0.8]
                      ),
                      scale: useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 1]),
                    }}
                  >
                    <Button
                      variant="ghost"
                      className={`group/btn text-lg font-semibold p-0 h-auto bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform`}
                    >
                      <span className="flex items-center gap-2">
                        View Project
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
