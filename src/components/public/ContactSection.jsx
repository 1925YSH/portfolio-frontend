"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { apiUrl } from "@/lib/api";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function ContactSection() {
  const videoRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize flipped HLS background video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance = null;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({ autoStartLoad: true, enableWorker: true });
      hlsInstance.loadSource(HLS_URL);
      hlsInstance.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send email directly from the browser (Web3Forms)
      const web3FormsRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "eb782e85-8b0f-4244-96f1-1d0acc742cb1",
          subject: `New Contact Message from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      // 2. Save to our own MongoDB database via the backend
      const res = await fetch(apiUrl("api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && web3FormsRes.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const marqueeText = "BUILDING THE FUTURE • FULL STACK ARCHITECTURE • CRAFTING EXPERIENCES • INNOVATIVE SOLUTIONS • ";

  return (
    <section id="contact" className="relative bg-bg pt-20 pb-12 overflow-hidden border-t border-stroke/60">
      {/* Flipped Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-30"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Infinite Marquee Banner */}
      <div className="relative z-10 w-full overflow-hidden py-4 border-y border-stroke/50 bg-bg/50 backdrop-blur-sm mb-16 md:mb-20">
        <div className="flex w-max animate-scroll-marquee select-none whitespace-nowrap">
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-muted uppercase px-4">
            {marqueeText.repeat(6)}
          </span>
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-muted uppercase px-4">
            {marqueeText.repeat(6)}
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Direct Outreach */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight mb-6">
                Let&apos;s build <span className="font-display italic">together</span>
              </h2>

              <p className="text-sm md:text-base text-muted font-light leading-relaxed mb-8">
                I am actively seeking software engineering and full stack opportunities. Whether you have a project inquiry or an open engineering role, I would love to connect.
              </p>
            </div>

            {/* Direct Email Pill CTA */}
            <div className="mb-10">
              <p className="text-xs text-muted uppercase tracking-widest mb-3 font-medium">
                Direct Contact
              </p>
              <a
                href="mailto:yashotwal777@gmail.com"
                className="relative group inline-flex items-center gap-3 p-1 rounded-full cursor-pointer"
              >
                <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                <span className="bg-surface border border-stroke rounded-full px-5 py-3 text-sm text-text-primary font-medium flex items-center gap-2 group-hover:bg-bg transition-colors">
                  <FaEnvelope className="text-[#89AACC]" />
                  <span>yashotwal777@gmail.com</span>
                  <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </a>
            </div>

            {/* Location & Social Icons */}
            <div className="space-y-4 pt-6 border-t border-stroke/60">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-muted">
                <FaMapMarkerAlt className="text-[#89AACC]" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/1925YSH"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-text-primary transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yash-otwal-55137a258"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-text-primary transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface/70 border border-stroke p-8 sm:p-10 backdrop-blur-md">
              <h3 className="text-2xl font-display italic text-text-primary mb-6">
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-bg/80 border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-bg/80 border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    className="w-full bg-bg/80 border border-stroke rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full inline-flex items-center justify-center rounded-xl p-0.5 cursor-pointer disabled:opacity-60"
                >
                  <span className="absolute -inset-0.5 rounded-xl accent-gradient opacity-80 group-hover:opacity-100 transition-opacity -z-10" />
                  <span className="w-full bg-text-primary text-bg font-medium text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all group-hover:bg-bg group-hover:text-text-primary">
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
