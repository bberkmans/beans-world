"use client";

import { useRef, useState } from "react";
import { useTransitionNav } from "./PageTransition";

type TimelineItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Home() {
  const { navigate } = useTransitionNav();  
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  const timelineItems: TimelineItem[] = [
    { id: 1, title: "Let's Give It A Go", description: "When I was a kid I loved drawing. I have many early drawings however this drawing done in my first couple months of 7th grade was my first go at actually drawing. I was very proud of it and it is a great photo to look back on", image: "/art/IMG_9669.jpeg", alt: "first art" },
    { id: 2, title: "Middle School's End", description: "This point is when I was really trying to get better. Watching youtube videos and learning as much as i could about this style of art called Anime. A japanese art style that I was very intersted it at the time. This is really the foundation I built the rest of my skills on top of.", image: "/art/IMG_9657.jpeg", alt: "anime" },
    { id: 3, title: "Halfway Through High School", description: "After high school started I wanted to branch out. Doing these drawings of cartoons felt a little childish. I started wanting to create art that was powerful and intense. I picked up realism and comic book art styes during the 2020-2021 years. I really started to improve and felt an exponential jump in my skills as an artist..", image: "/art/IMG_4469.jpg", alt: "comicbook" },
    { id: 4, title: "Recent Work", description: "My first couple years in collage I wanted to start working on my weakest point in drawing. So I started drawing headshots. faces were very difficult for me for a very long tinme. I never though I'd be able to get good at but after a little practice and learning I started getting the hang of it.", image: "/art/IMG_8830.jpg", alt: "faces", objectPosition: "center 30%" },
    { id: 5, title: "Today", description: "Still learning, still experimenting. Every piece is a step forward. I've made great progress over the past decade of my drawing experience. I 've also been branching out with my artistic forms by making tiktok edits. I'm very proud of where I am today and how far I've come. I can't wait to keep learning and improving my art skills.", image: "/art/IMG_6320.jpeg", alt: "recent" },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);
  const solidWhiteOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  return (
    <main className="w-full pt-16">

      {/* 🔥 TRANSITION SECTION */}
      <section ref={sectionRef} className="relative h-[150vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black" />

          <motion.div
            style={{ opacity: gradientOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-black via-neutral-200 to-white"
          />

          <motion.div
            style={{ opacity: solidWhiteOpacity }}
            className="absolute inset-0 bg-white"
          />

          <motion.div
            style={{ opacity: heroOpacity }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <h1
                  className={`${playfair.className} absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-white text-7xl md:text-8xl font-bold tracking-wide text-center whitespace-nowrap`}
                >
                  b.ea.n&apos;s World
                </h1>

                <div className="absolute left-1/2 top-[62%] -translate-x-1/2 text-center">
                  <p className="text-white text-sm md:text-base tracking-[0.3em] uppercase">
                    Socials
                  </p>
                  <a
                    href="https://instagram.com/brendan_berkmans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-gray-300 text-base md:text-lg hover:text-white transition duration-200"
                  >
                    Instagram →
                  </a>
                  <a
                    href="https://www.tiktok.com/@b_e_a_n.n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-gray-300 text-base md:text-lg hover:text-white transition duration-200"
                  >
                    TikTok →
                  </a>
                  <a
                    href="https://www.youtube.com/@freemuffin9172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-gray-300 text-base md:text-lg hover:text-white transition duration-200"
                  >
                    Youtube →
                  </a>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

     {/* ABOUT SECTION */}
      <section id="about" className="relative h-[120vh] overflow-hidden bg-white px-6 py-24 md:px-16">
        {/* Decorative blue circle */}
        <div className="absolute h-[620px] w-[620px] rounded-full bg-sky-200/70 right-[300px] top-[240px]" />

        {/* Animated text only */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl right-[-400px] top-[240px]"
        >
          <h2 className={`${playfair.className} text-black text-5xl md:text-7xl font-bold`}>
            About Me
          </h2>

          <div className="mt-10 max-w-3xl">
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              My name is Brendan, and I’m a college student at Loyola University Chicago majoring in Computer Science. I’ve always been drawn to both creativity and logic, which is what led me to this field—it’s a space where artistic thinking and structured problem-solving come together.

              Art has been a part of my life for as long as I can remember. Over the past decade, I’ve explored many different forms, including drawing, sketching, painting, foam crafts, and more. Each medium has given me a new way to express ideas and experiment with creativity.

              What I enjoy most is the process of learning and improving. Whether it’s refining technique or trying something completely new, I’ve always been motivated to grow as an artist and continue developing my skills over time.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 🔥 ART SECTION */}
      <section className="h-[115vh] flex items-center justify-center bg-black px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl top-[-50px] right-[340px]"
        >
          <h3 className={`${playfair.className} text-white text-5xl md:text-7xl font-bold`}>
            My Art
          </h3>
          <div className="mt-10 max-w-3xl">
            <p className="text-white text-xl md:text-2xl leading-relaxed">
              Head to the art page to look at my art
            </p>

            <button
              onClick={() => navigate("/art")}
              className="inline-block mt-8 text-white text-lg md:text-xl tracking-wide transition duration-200 hover:opacity-70 hover:translate-x-1 cursor-pointer"
            >
              go to art →
            </button>
          </div>

          {/* Image placeholders */}
          <div className="absolute right-[-800px] top-[255px] -translate-y-1/2 w-[600px] h-[700px]">

            {/* Top image */}
            <div className="absolute top-[-100px] left-[-40px] w-[220px] h-[280px] overflow-hidden ring-2 ring-white ring-offset-8 ring-offset-black">
              <Image
                src="/art/IMG_0885.jpeg"
                alt="Portrait sketch"
                fill
                className="object-cover"
              />
            </div>

            {/* Right image (overlapping) */}
            <div className="absolute top-[80px] left-[260px] w-[240px] h-[310px] overflow-hidden ring-2 ring-white ring-offset-8 ring-offset-black">
              <Image
                src="/art/IMG_6320.jpeg"
                alt="Figure sketch"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="absolute top-[260px] left-[-60px] w-[260px] h-[300px] overflow-hidden ring-2 ring-white ring-offset-8 ring-offset-black">
              <Image
                src="/art/IMG_9657.jpeg"
                alt="Figure study with hat"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </motion.div>
      </section>

      {/* 🔥 TIMELINE */}
      <section className="relative min-h-[115vh] flex items-center justify-center bg-white px-6 py-24">
        <div className="relative w-full max-w-6xl">
          <h2 className={`${playfair.className} text-black text-4xl md:text-5xl font-bold text-center mb-24`}>
            Timeline
          </h2>

          {/* Timeline container */}
          <div className="relative w-[95%] mx-auto h-[400px] flex items-center">
            {/* Horizontal line with arrowheads (SVG) */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[30px]"
              viewBox="0 0 1000 30"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrow-left"
                  markerWidth="6"
                  markerHeight="6"
                  refX="1"
                  refY="3"
                  orient="auto"
                >
                  <path d="M6,0 L0,3 L6,6 Z" fill="black" />
                </marker>
                <marker
                  id="arrow-right"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="black" />
                </marker>
              </defs>
              <line
              x1="15"
              y1="15"
              x2="985"
              y2="15"
              stroke="black"
              strokeWidth="10"
              markerStart="url(#arrow-left)"
              markerEnd="url(#arrow-right)"
              vectorEffect="non-scaling-stroke"
            />
            </svg>

            {/* Circles */}
            {timelineItems.map((item, index) => {
              const isAbove = index % 2 === 0; // 0, 2, 4 above; 1, 3 below
              const isBlue = index % 2 === 1;  // alternate gray/blue
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  style={{ left: `${(index / (timelineItems.length - 1)) * 100}%` }}
                  className={`absolute -translate-x-1/2 w-40 h-40 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 ring-2 ring-black ring-offset-4 ring-offset-white ${
                    isBlue ? "bg-sky-200" : "bg-gray-300"
                  } ${isAbove ? "-translate-y-[100px]" : "translate-y-[100px]"} shadow-md`}
                  aria-label={`Open ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition ?? "center center" }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Dimmed backdrop (timeline stays visible behind) */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setActiveItem(null)}
            />

            {/* Modal box */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-lg shadow-2xl w-[90%] max-w-4xl h-[500px] flex overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 text-black hover:opacity-60 text-2xl"
                aria-label="Close"
              >
                ✕
              </button>

             {/* Left: image */}
                <div className="w-1/2 h-full bg-gray-200 relative">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: activeItem.objectPosition ?? "center center" }}
                  />
                </div>

              {/* Right: description */}
              <div className="w-1/2 p-10 flex flex-col justify-center">
                <h3 className={`${playfair.className} text-black text-3xl md:text-4xl font-bold mb-4`}>
                  {activeItem.title}
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* 🔥 CONTACT */}
      <section className="bg-black px-6 py-20">
        <div className="max-w-6xl mx-auto border border-white/40 p-12 md:p-20">
          <h2 className={`${playfair.className} text-white text-4xl md:text-5xl font-bold mb-8`}>
            Get In Touch
          </h2>
          <p className="text-white text-lg md:text-xl mb-3">
            Contact for Work:{" "}
            <a
              href="mailto:brendan.berkmans@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition duration-200">
            
              brendan.berkmans@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Based in Chicago, IL — open to commissions and collaborations.
          </p>

          <div className="flex flex-wrap gap-6 text-white text-base md:text-lg">
            <a href="https://instagram.com/brendan_berkmans" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition duration-200">
              Instagram →
            </a>
            <a href="https://www.tiktok.com/@b_e_a_n.n" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition duration-200">
              TikTok →
            </a>
            <a href="https://www.youtube.com/@freemuffin9172" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition duration-200">
              YouTube →
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          © 2026 Brendan Berkmans. All rights reserved.
        </p>
      </section>

    </main>
  );
}