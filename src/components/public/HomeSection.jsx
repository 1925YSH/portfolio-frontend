"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const ROLES = ["Software Engineer", "Full Stack Developer", "Backend Engineer", "System Builder"];
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function HomeSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Initialize HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance = null;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        autoStartLoad: true,
        enableWorker: true,
      });
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

  // Cycle roles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.15 },
        "-=0.9"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-45"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-24 pb-16">
        {/* Eyebrow */}
        {/* <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6">
          COLLECTION &apos;26
        </p> */}

        {/* Name */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Yash Otwal
        </h1>

        {/* Dynamic Role Line */}
        <p className="blur-in text-lg sm:text-xl md:text-2xl text-muted font-light mb-5">
          A dedicated{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-xl sm:text-2xl md:text-3xl px-1"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          based in Indore, India.
        </p>

        {/* Subtitle / Description */}
        <p className="blur-in text-sm sm:text-base text-muted max-w-lg mb-10 leading-relaxed font-light">
          Building high-performance, scalable web applications with clean architecture. Focused on turning complex requirements into resilient, production-ready software.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* Solid "See Works" button */}
          <a
            href="#projects"
            className="relative group inline-flex items-center justify-center rounded-full text-sm px-8 py-3.5 font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="bg-text-primary text-bg rounded-full px-8 py-3.5 transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              See Works
            </span>
          </a>

          {/* Outlined "Reach out..." button */}
          <a
            href="#contact"
            className="relative group inline-flex items-center justify-center rounded-full text-sm px-8 py-3.5 font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="border border-stroke bg-bg/90 backdrop-blur-sm text-text-primary rounded-full px-8 py-3.5 transition-colors duration-300 group-hover:border-transparent group-hover:bg-surface">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute inset-x-0 h-4 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
