"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LightButton from "@/components/ui/light_button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#consultation", label: "Schedule a Call" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const subjects = ["SAT", "AP", "ACT", "Calculus", "Chemistry", "Geometry"];
  
  // Duplicate items for seamless loop
  const duplicatedSubjects = [...subjects, ...subjects];

  return (
    <div className=" bg-black text-white ">

      {/* Navigation */}
      <div className="md:container relative mx-auto ">

      <nav className="absolute top-0 right-0 z-20 p-6 lg:p-8 w-full ">
        {/* Hamburger menu for mobile */}
        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        {/* Desktop navigation */}
        <div className="hidden lg:flex text-base justify-between  text-bold px-8">
          <h1 className="text-3xl  font-bold mb-4 md:mb-6">Simon Tran</h1>
          <div className="flex gap-8 text-base">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-white hover:text-gray-300 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile: full black overlay + nav links + X to close */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black flex flex-col p-6 pt-8">
          <div className="flex justify-end">
            <button
              type="button"
              className="text-white p-2 -mr-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 flex-1 justify-center">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-gray-300 text-xl font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative flex flex-col lg:flex-row min-h-screen lg:min-h-auto">
        {/* Background Image for Mobile - Behind Text */}
        <div className="lg:hidden absolute inset-0 bg-gray-950" >
        <Image
            src="/images/simon_portrait.png"
            alt="Simon Tran"
            fill
            className="object-cover object-left opacity-40"
            priority
            />
        </div>

        {/* Left Section - Text Content (2/3 width) */}
        <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-end lg:justify-end px-6 lg:px-16 py-12 lg:py-32 mt-auto max-w-2xl">
          {/* Name */}
          
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-3  w-fit">
            <span className="text-white text-xs">• Available for work</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold lg:leading-16 mb-4 md:mb-6">
            Your trusted partner in academic mastery
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 mb-8  max-w-xl">
            Personalized, concept-first mentorship that builds deep understanding, strategic thinking, and long-term academic success.
          </p>
          
          {/* Contact Button */}
          <LightButton text="Contact Me" href="#contact" />
        </div>

        {/* Right Section - Image with Overlay (1/3 width) - Desktop Only */}
        <div className="hidden lg:block w-[45%] relative min-h-screen lg:min-h-auto max-w-xl ">
          {/* Portrait Image */}
          <div className="absolute inset-0  ">
            <Image
              src="/images/simon_portrait.png"
              alt="Simon Tran"
              fill
              className="object-cover object-left p-6 rounded-4xl"
              priority
              />
          </div>
              </div>

          {/* Testimonial Box - Bottom Right */}
          <div className="absolute bottom-6 right-14 bg-black/50 backdrop-blur-sm rounded-lg p-6 max-w-2xs hidden lg:block">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M8 0L10.163 5.528L16 6.112L11.82 9.944L12.944 16L8 13.056L3.056 16L4.18 9.944L0 6.112L5.837 5.528L8 0Z" />
                </svg>
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-white text-sm leading-snug">
              Working with Simon has been a game changer for my child's academics. The clarity and confidence he builds are unmatched.
            </p>
          </div>
        </div>
      </div>

      {/* Subject Logos Carousel Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-16">
          <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
            Academic mentorship spanning advanced STEM coursework and national exams.
          </p>
          <div className="w-full max-w-4xl mx-auto relative overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedSubjects.map((subject, index) => (
                <div key={`${subject}-${index}`} className="shrink-0 w-1/3 md:w-1/6 px-2 md:px-4">
                  <div className="flex items-center justify-center p-4">
                    <Image
                      src={`/images/subject_logos/${subject}.png`}
                      alt={subject}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 rounded-full px-4 py-1 mb-4">
              <span className="text-sm text-gray-700">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find out which one of our services fit the needs of your project.
            </p>
          </div>

          {/* Content: Image and Accordion */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left: Tutoring Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                <Image
                  src="/images/simon_tutoring.png"
                  alt="Simon Tutoring Session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Services Accordion */}
            <div className="w-full md:w-1/2">
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                        <path d="M9 9v0M9 15v0M9 21v0" />
                      </svg>
                      Academic Mentorship
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    I provide long-term academic stewardship tailored to each student's needs. Rather than one-size-fits-all tutoring, my work focuses on diagnosing foundational gaps, rebuilding understanding, and guiding students through their coursework with clarity, structure, and strategic oversight.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      STEM Foundations & Coursework Support
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Comprehensive support for foundational STEM subjects including mathematics, physics, chemistry, and biology. I help students build strong conceptual understanding and problem-solving skills.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M9 2v6M15 2v6M5 10h14M3 4h18v16H3z" />
                      </svg>
                      AP & Advanced Coursework
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Specialized guidance for Advanced Placement courses and other advanced coursework. I help students excel in challenging academic environments and prepare for college-level rigor.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                      </svg>
                      Test Preparation (SAT / ACT / AP Exams)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Strategic test preparation for standardized exams including SAT, ACT, and AP exams. I provide targeted practice, test-taking strategies, and comprehensive review to maximize scores.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 3v18" />
                      </svg>
                      Academic Strategy & Planning
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Long-term academic planning and strategy development. I help students create effective study plans, manage coursework, and develop sustainable learning habits for academic success.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                    <div className="flex items-center gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      College Application & Academic Guidance
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Comprehensive support for college applications, including essay guidance, academic planning, and strategic advice to help students present their best selves to admissions committees.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">7+</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Years of mentorship experience
              </h3>
              <p className="text-gray-600">
                Improving homes with expert craftsmanship for years.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">200</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Point SAT Score Improvement
              </h3>
              <p className="text-gray-600">
                Achieved through structured, long-term preparation.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">48</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Average Response Time Window
              </h3>
              <p className="text-gray-600">
                For reliable and quick parent and student communication.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">20%</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Students Maintain or Improve Grades
              </h3>
              <p className="text-gray-600">
                Across core STEM coursework and advanced classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Call-to-Action Section */}
      <section id="consultation" className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Get Started Button */}
            <div className="mb-8">
              <button className="bg-gray-200 text-gray-900 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-300 transition-colors">
                Get Started
              </button>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schedule a Free Consultation Call
            </h2>

            {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's talk through your student's situation and determine whether this long-term mentorship makes sense.
            </p>

            {/* CTA Button */}
            <LightButton text="Schedule a Free Consultation Call" href="#contact" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 rounded-full px-4 py-1 mb-4">
              <span className="text-sm text-gray-700">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hear from my clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.
            </p>
          </div>

          {/* Animated Testimonial Rows */}
          <div className="space-y-8 overflow-hidden">
            {/* Row 1 - Scrolls Left */}
            <div className="flex animate-scroll-left gap-6">
              {[
                { quote: "I got Accepted into UCLA with his help!", client: "Parent of 10th Grade Student" },
                { quote: "Got an A+ for all my tutored classes", client: "Parent of AP Student" },
                { quote: "1210 SAT score, thanks to Simon!", client: "Parent of Algebra II Student" },
                { quote: "A+ on all subjects he helped my child on", client: "Parent of Honors Student" },
                { quote: "Couldn't recommend Simon enough", client: "Parent of STEM Student" },
                { quote: "Best tutor I've ever had!", client: "Parent of 10th Grade Student" },
              ].map((testimonial, index) => (
                <div key={`row1-${index}`} className="shrink-0 w-80 bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                        <path d="M10 0L12.163 5.528L18 6.112L13.82 9.944L14.944 16L10 13.056L5.056 16L6.18 9.944L2 6.112L7.837 5.528L10 0Z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-900 mb-4 font-medium">{testimonial.quote}</p>
                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-600">{testimonial.client}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { quote: "I got Accepted into UCLA with his help!", client: "Parent of 10th Grade Student" },
                { quote: "Got an A+ for all my tutored classes", client: "Parent of AP Student" },
                { quote: "1210 SAT score, thanks to Simon!", client: "Parent of Algebra II Student" },
              ].map((testimonial, index) => (
                <div key={`row1-dup-${index}`} className="shrink-0 w-80 bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                        <path d="M10 0L12.163 5.528L18 6.112L13.82 9.944L14.944 16L10 13.056L5.056 16L6.18 9.944L2 6.112L7.837 5.528L10 0Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-900 mb-4 font-medium">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-600">{testimonial.client}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - Scrolls Right */}
            <div className="flex animate-scroll-right gap-6">
              {[
                { quote: "A+ on all subjects he helped my child on", client: "Parent of Honors Student" },
                { quote: "Couldn't recommend Simon enough", client: "Parent of STEM Student" },
                { quote: "Best tutor I've ever had!", client: "Parent of 10th Grade Student" },
                { quote: "I got Accepted into UCLA with his help!", client: "Parent of 10th Grade Student" },
                { quote: "Got an A+ for all my tutored classes", client: "Parent of AP Student" },
                { quote: "1210 SAT score, thanks to Simon!", client: "Parent of Algebra II Student" },
              ].map((testimonial, index) => (
                <div key={`row2-${index}`} className="shrink-0 w-80 bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                        <path d="M10 0L12.163 5.528L18 6.112L13.82 9.944L14.944 16L10 13.056L5.056 16L6.18 9.944L2 6.112L7.837 5.528L10 0Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-900 mb-4 font-medium">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-600">{testimonial.client}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { quote: "A+ on all subjects he helped my child on", client: "Parent of Honors Student" },
                { quote: "Couldn't recommend Simon enough", client: "Parent of STEM Student" },
                { quote: "Best tutor I've ever had!", client: "Parent of 10th Grade Student" },
              ].map((testimonial, index) => (
                <div key={`row2-dup-${index}`} className="shrink-0 w-80 bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                        <path d="M10 0L12.163 5.528L18 6.112L13.82 9.944L14.944 16L10 13.056L5.056 16L6.18 9.944L2 6.112L7.837 5.528L10 0Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-900 mb-4 font-medium">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-600">{testimonial.client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-white/10 rounded-full px-4 py-1 mb-6">
                <span className="text-sm text-white">Contact</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h2>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-10">
                For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Location</h3>
                  <p className="text-white">Orange County, CA</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Email</h3>
                  <a href="mailto:vietsimon.tran@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                    vietsimon.tran@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Telephone</h3>
                  <a href="tel:+17144178182" className="text-white hover:text-gray-300 transition-colors">
                    (714) 417-8182
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {/* Instagram */}
                  <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="TikTok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.89 2.89 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="X">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form className="bg-white rounded-lg p-6 md:p-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
                  ></input>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johnsmith@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+44789 123456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hello, I'd like to enquire about...."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-3 font-medium transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 md:py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Simon</h3>
              <p className="text-gray-400 text-sm">©2025 Refit. All rights reserved.</p>
            </div>

            {/* Right Side */}
            <div className="md:text-right">
              <h4 className="text-lg font-semibold mb-4">Quick links</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About us</a>
                  <a href="#work" className="block text-gray-400 hover:text-white transition-colors">Our work</a>
                  <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                </div>
                <div className="space-y-2">
                  <a href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">Testimonials</a>
                  <a href="#faqs" className="block text-gray-400 hover:text-white transition-colors">FAQs</a>
                  <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
