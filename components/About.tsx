import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, CheckCircle2, Zap, Shield, Users, Code2 } from "lucide-react";
import logoCardImage from "../logo/LogoCard.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatWeDo = [
    "End-to-end project delivery from concept to deployment",
    "Modern web and mobile solutions",
    "Cloud hosting, optimization & automation",
    "AI-assisted tooling & automation",
    "Technology consulting & solution architecture",
  ];

  const whyTrustUs = [
    "No outsourcing or big-team complications",
    "Direct communication with the solution architect",
    "Transparent development process",
    "Scalable, secure, and future-ready solutions",
    "Full ownership transfer & long-term support",
  ];

  return (
    <section id="about" className="relative py-20 md:py-24 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
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
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-6 neon-glow-blue"
          >
            <Sparkles className="h-4 w-4 text-[#00d4ff]" />
            <span className="text-[#00d4ff] uppercase tracking-wide text-sm font-semibold">About Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            About Facto Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Facto Technologies is an independent technology solutions provider specializing in modern, scalable, and fully managed end-to-end software delivery. We help startups and businesses transform their ideas into secure, reliable, and high-performance digital products.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With strong experience in application development, cloud technologies, automation, and solution engineering, we ensure every project is executed with precision, transparency, and a deep understanding of modern digital ecosystems.
          </p>
        </motion.div>

        {/* Logo Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <img
              src={logoCardImage}
              alt="Your Technology Partner - Facto Technologies"
              className="w-full h-auto rounded-3xl object-contain"
            />
          </motion.div>
        </motion.div>

        {/* What We Do Best */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center">What We Do Best</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass rounded-2xl p-4 md:p-6 border-2 border-white/20 hover:border-[#00d4ff]/40 transition-all duration-300 group hover:scale-105 white-accent-border"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#b026ff] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed pt-0.5 md:pt-1">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach & Why Trust Us */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] via-[#b026ff] to-[#ff00ff] rounded-3xl transform rotate-3 opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
            <div className="relative glass rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-white/20 hover:border-[#00d4ff]/40 transition-all duration-300 white-accent-border">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#b026ff] flex items-center justify-center mb-4 md:mb-6">
                <Zap className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Our Approach</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We operate as a boutique technology partner — agile, hands-on, and deeply committed to quality. Each project is executed with a direct and personal approach, ensuring fast communication, responsible delivery, and clear technical guidance throughout the entire journey.
              </p>
            </div>
          </motion.div>

          {/* Why Businesses Trust Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff] via-[#ff00ff] to-[#00d4ff] rounded-3xl transform -rotate-3 opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
            <div className="relative glass rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-white/20 hover:border-[#b026ff]/40 transition-all duration-300 white-accent-border">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#b026ff] to-[#ff00ff] flex items-center justify-center mb-4 md:mb-6">
                <Shield className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Why Businesses Trust Us</h3>
              <div className="space-y-3 md:space-y-4">
                {whyTrustUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
