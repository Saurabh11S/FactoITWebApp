import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Shield, Sparkles, Cloud, Brain, Database, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ["#00d4ff", "#b026ff", "#ff00ff", "#00ffff"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
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
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#16213e] pt-20">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Holographic Gradient Overlay */}
      <div className="absolute inset-0 holographic opacity-30" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-magenta-500 rounded-full blur-[120px] opacity-20 float-animation" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-3 glass rounded-full neon-glow-blue"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#00d4ff]" />
                <span className="text-sm font-medium">Welcome to the Future of Technology</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Innovating the Future with{" "}
              <span className="animated-gradient-text block mt-2">
                Modern, Scalable Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-xl text-white/90 leading-relaxed max-w-xl"
            >
              Helping businesses turn ideas into high-quality digital solutions. I build clean, secure and reliable software — from websites and mobile apps to cloud deployments and smart automation tools.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mb-10 text-lg text-white/80 leading-relaxed max-w-xl"
            >
              Empowering small businesses & startups with smarter technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 mb-12"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00ffff] hover:to-[#ff00ff] text-white px-8 py-6 text-lg font-semibold rounded-xl neon-glow-blue transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-2 border-[#00d4ff]/50 text-white hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:neon-glow-blue"
              >
                View Services
              </Button>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Code, label: "Expert Code", color: "blue" },
                { icon: Zap, label: "Fast Delivery", color: "purple" },
                { icon: Shield, label: "Secure", color: "magenta" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    boxShadow: feature.color === "blue" 
                      ? "0 0 20px rgba(0, 212, 255, 0.3)"
                      : feature.color === "purple"
                      ? "0 0 20px rgba(176, 38, 255, 0.3)"
                      : "0 0 20px rgba(255, 0, 255, 0.3)",
                  }}
                >
                  <feature.icon
                    className={`h-8 w-8 mb-3 mx-auto ${
                      feature.color === "blue"
                        ? "text-[#00d4ff]"
                        : feature.color === "purple"
                        ? "text-[#b026ff]"
                        : "text-[#ff00ff]"
                    } group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Floating Illustrations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:block h-[600px] perspective-1000"
            style={{ perspective: "1000px" }}
          >
            {/* 3D Cloud Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-10 left-10 float-3d"
              style={{ animationDelay: "0s" }}
            >
              <div className="card-3d relative w-32 h-32 glass rounded-2xl p-6 flex flex-col items-center justify-center group cursor-pointer"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(0, 212, 255, 0.2)",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#00ffff]/20 rounded-2xl" />
                <Cloud className="h-16 w-16 text-[#00d4ff] mb-2 relative z-10" style={{ filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.8))" }} />
                <span className="text-sm font-semibold text-white relative z-10">Cloud</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] rounded-2xl opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* 3D AI/Brain Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-20 right-10 float-3d"
              style={{ animationDelay: "2s" }}
            >
              <div className="card-3d relative w-32 h-32 glass rounded-2xl p-6 flex flex-col items-center justify-center group cursor-pointer"
                style={{
                  boxShadow: "0 20px 60px rgba(176, 38, 255, 0.4), inset 0 0 30px rgba(176, 38, 255, 0.2)",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#b026ff]/20 to-[#ff00ff]/20 rounded-2xl" />
                <Brain className="h-16 w-16 text-[#b026ff] mb-2 relative z-10" style={{ filter: "drop-shadow(0 0 10px rgba(176, 38, 255, 0.8))" }} />
                <span className="text-sm font-semibold text-white relative z-10">AI</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#b026ff] to-[#ff00ff] rounded-2xl opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* 3D Data/Database Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateX: -180 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-32 left-16 float-3d"
              style={{ animationDelay: "4s" }}
            >
              <div className="card-3d relative w-32 h-32 glass rounded-2xl p-6 flex flex-col items-center justify-center group cursor-pointer"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.2)",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/20 to-[#00d4ff]/20 rounded-2xl" />
                <Database className="h-16 w-16 text-[#00ffff] mb-2 relative z-10" style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))" }} />
                <span className="text-sm font-semibold text-white relative z-10">Data</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff] to-[#00d4ff] rounded-2xl opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* 3D Cybersecurity/Shield Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateX: 180 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="absolute bottom-10 right-16 float-3d"
              style={{ animationDelay: "6s" }}
            >
              <div className="card-3d relative w-32 h-32 glass rounded-2xl p-6 flex flex-col items-center justify-center group cursor-pointer"
                style={{
                  boxShadow: "0 20px 60px rgba(255, 0, 255, 0.4), inset 0 0 30px rgba(255, 0, 255, 0.2)",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/20 to-[#b026ff]/20 rounded-2xl" />
                <Lock className="h-16 w-16 text-[#ff00ff] mb-2 relative z-10" style={{ filter: "drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))" }} />
                <span className="text-sm font-semibold text-white relative z-10">Security</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] to-[#b026ff] rounded-2xl opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* Central Connecting Lines Effect */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#b026ff" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 128 80 L 480 100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.path
                d="M 160 448 L 448 480"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#00d4ff]/50 rounded-full flex justify-center neon-glow-blue">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00d4ff] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
