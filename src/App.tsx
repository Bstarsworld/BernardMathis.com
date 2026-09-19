/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WORK_ITEMS } from './data/portfolioData';
import { WorkItem } from './types';
import { WebGLCanvas } from './components/WebGLCanvas';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { GearMatrix } from './components/GearMatrix';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* Real WebGL GLSL Shader Background with user controls */}
      <WebGLCanvas />

      {/* Futuristic Background Tech Grid Overlay */}
      <div className="tech-grid-pattern fixed inset-0 pointer-events-none opacity-25 z-0" />

      {/* Top Glass Navigation */}
      <Navigation onOpenContactModal={() => scrollToSection('contact')} />

      {/* Main Single-Page Infinite Scroll Flow - Producer First */}
      <main className="relative z-10">
        {/* 1. About / Overview Hero Section */}
        <HeroSection 
          onPlayVideo={(item) => setActiveVideo(item)} 
          onScrollTo={scrollToSection} 
        />

        {/* 2. Reel & Filmmaking Work */}
        <WorkSection 
          onPlayVideo={(item) => setActiveVideo(item)} 
        />

        {/* 3. Production Capabilities & Services (Shoot, Edit, Record, Mix) */}
        <ServicesSection />

        {/* 4. Camera Gear & Audio Studio Rig */}
        <GearMatrix />

        {/* 5. Production Rigor & Background Experience */}
        <ExperienceSection />

        {/* 6. Direct Inquiries & Contact */}
        <ContactSection />
      </main>

      {/* Interactive Video Modal Player */}
      <VideoModal
        item={activeVideo}
        items={WORK_ITEMS}
        onClose={() => setActiveVideo(null)}
        onSelect={(item) => setActiveVideo(item)}
      />

    </div>
  );
}
