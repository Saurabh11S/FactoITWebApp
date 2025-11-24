import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import logoImage from "../logo/Logo2.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Team", href: "#team" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Services", href: "#services" },
      { name: "AI Solutions", href: "#services" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, gradient: "from-[#00d4ff] to-[#00ffff]", glow: "rgba(0, 212, 255, 0.5)" },
    { icon: Twitter, gradient: "from-[#b026ff] to-[#ff00ff]", glow: "rgba(176, 38, 255, 0.5)" },
    { icon: Linkedin, gradient: "from-[#00ffff] to-[#00d4ff]", glow: "rgba(0, 255, 255, 0.5)" },
    { icon: Instagram, gradient: "from-[#ff00ff] to-[#b026ff]", glow: "rgba(255, 0, 255, 0.5)" },
    { icon: Github, gradient: "from-[#00d4ff] to-[#b026ff]", glow: "rgba(0, 212, 255, 0.5)" },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = ["#00d4ff", "#b026ff", "#ff00ff", "#00ffff"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connections
        particles.forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = 0.1 * (1 - distance / 120);
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#00d4ff]/10 text-white pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* CTA Section with Animated Background */}
      <div className="relative py-16 md:py-20 mb-12 md:mb-16 overflow-hidden">
        {/* Animated Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
        
        {/* Animated Wave Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            style={{ height: '100%' }}
          >
            <motion.path
              d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
              fill="url(#waveGradient1)"
              opacity="0.3"
              animate={{
                d: [
                  "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                  "M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z",
                  "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z"
              fill="url(#waveGradient2)"
              opacity="0.2"
              animate={{
                d: [
                  "M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z",
                  "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                  "M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#b026ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#b026ff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* CTA Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's collaborate to build secure, modern and high-performing digital solutions that create real impact.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00ffff] hover:to-[#ff00ff] text-white px-8 py-6 text-lg font-semibold rounded-xl neon-glow-blue transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay - Only for footer content, not CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Logo size="medium" showText={true} />
              <div className="text-xs text-gray-300 mt-2">Factoit.com</div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 mb-8 leading-relaxed max-w-md"
            >
              Your trusted partner in digital transformation and innovative technology solutions. Empowering businesses worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-12 h-12 rounded-xl glass border border-[#00d4ff]/20 flex items-center justify-center group hover:border-[#00d4ff]/40 transition-all`}
                  style={{
                    boxShadow: `0 0 20px ${social.glow}40`,
                  }}
                >
                  <social.icon className={`h-5 w-5 text-gray-400 group-hover:text-white transition-colors`} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00d4ff] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#b026ff] to-[#ff00ff] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#b026ff] transition-colors group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#b026ff] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#ff00ff] to-[#00d4ff] bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff00ff] transition-colors group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#ff00ff] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#00d4ff]/10 pt-6 md:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm">
              © {currentYear} Facto Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="Facto Technologies Logo"
                className="h-5 w-5 md:h-6 md:w-6 object-contain"
              />
              <p className="text-gray-400 text-xs md:text-sm">
                Engineered by Facto Technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
