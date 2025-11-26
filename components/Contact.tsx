import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Sparkles, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || `Server error: ${response.status}`);
      }

      const data = await response.json();

      // Success
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you soon. Check your email for confirmation.',
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "G-105, Second Floor, New Delhi, Arya Samaj Nagar, Delhi, 110059 IND",
      gradient: "from-[#00d4ff] to-[#00ffff]",
      glow: "rgba(0, 212, 255, 0.5)",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 80 1234 5678",
      gradient: "from-[#b026ff] to-[#ff00ff]",
      glow: "rgba(176, 38, 255, 0.5)",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@factoit.com",
      gradient: "from-[#ff00ff] to-[#b026ff]",
      glow: "rgba(255, 0, 255, 0.5)",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-24 lg:py-28 bg-[#0a0a0f] scroll-mt-20 overflow-hidden" ref={ref}>
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop')",
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
            <span className="text-[#00d4ff] uppercase tracking-wide text-sm font-semibold">Contact Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            Let's Build Your Next Solution
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3">
            Whether you're looking to get a website built, automate a workflow, deploy to the cloud or need technical help — I'm here to support your business.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Reach out anytime and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                style={{ background: `linear-gradient(135deg, ${info.gradient.includes('00d4ff') ? '#00d4ff' : info.gradient.includes('b026ff') ? '#b026ff' : '#ff00ff'}, transparent)` }}
              />
              <div 
                className="relative glass rounded-3xl p-6 md:p-8 text-center border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 transition-all duration-300 group-hover:scale-105"
                style={{
                  boxShadow: `0 0 30px ${info.glow}`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${info.gradient} mb-6`}
                  style={{
                    boxShadow: `0 0 30px ${info.glow}`,
                  }}
                >
                  <info.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{info.title}</h3>
                <p className="text-gray-300 leading-relaxed">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-white/20 white-accent-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="glass border-[#00d4ff]/20 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="glass border-[#00d4ff]/20 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help you?"
                  required
                  className="glass border-[#00d4ff]/20 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="glass border-[#00d4ff]/20 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00ffff] hover:to-[#ff00ff] text-white px-8 py-6 text-lg font-semibold rounded-xl neon-glow-blue transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
