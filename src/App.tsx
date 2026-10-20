/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from './data/zodiacData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CelestialZodiacWheel } from './components/CelestialZodiacWheel';
import { ZodiacFinder } from './components/ZodiacFinder';
import { ZodiacOutfitStudio, SavedCustomDesign } from './components/ZodiacOutfitStudio';
import { PhilosophySection } from './components/PhilosophySection';
import { LookbookModal } from './components/LookbookModal';
import { BespokeCertificateModal } from './components/BespokeCertificateModal';
import { Footer } from './components/Footer';

const LOCAL_STORAGE_KEY = 'maison_zodiaque_saved_couture';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'find-zodiac' | 'design-outfit' | 'lookbook'>('home');
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign>(ZODIAC_SIGNS[4]); // Leo default
  const [genderMode, setGenderMode] = useState<'female' | 'male'>('male'); // Model Pria by default, easily toggled
  const [savedDesigns, setSavedDesigns] = useState<SavedCustomDesign[]>([]);
  const [isLookbookOpen, setIsLookbookOpen] = useState<boolean>(false);
  const [activeCertificate, setActiveCertificate] = useState<SavedCustomDesign | null>(null);

  // Load saved designs from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setSavedDesigns(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read from local storage', e);
    }
  }, []);

  // Save designs to local storage
  const handleSaveDesign = (design: SavedCustomDesign) => {
    const updated = [design, ...savedDesigns];
    setSavedDesigns(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not write to local storage', e);
    }
  };

  const handleDeleteDesign = (id: string) => {
    const updated = savedDesigns.filter((d) => d.id !== id);
    setSavedDesigns(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not write to local storage', e);
    }
  };

  const handleTabChange = (tab: 'home' | 'find-zodiac' | 'design-outfit' | 'lookbook') => {
    if (tab === 'lookbook') {
      setIsLookbookOpen(true);
    } else {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProceedToDesign = (sign: ZodiacSign) => {
    setSelectedZodiac(sign);
    setActiveTab('design-outfit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-[#e8e4dc] celestial-grid-bg flex flex-col selection:bg-[#d4af37]/30 selection:text-[#fff]">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        savedCount={savedDesigns.length}
      />

      <main className="flex-1">
        {/* Home Overview View */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            <HeroSection
              onFindZodiac={() => handleTabChange('find-zodiac')}
              onDesignOutfit={(chosenGender) => {
                if (chosenGender) setGenderMode(chosenGender);
                handleTabChange('design-outfit');
              }}
              genderMode={genderMode}
              onToggleGender={setGenderMode}
            />

            {/* Interactive Astronomical Zodiac Dial */}
            <div className="border-b border-[#d4af37]/20 bg-[#080b13]/60 backdrop-blur-sm">
              <CelestialZodiacWheel
                selectedZodiac={selectedZodiac}
                onSelectZodiac={setSelectedZodiac}
              />
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-24">
              {/* Menu 1 Section: Ketahui Zodiakmu */}
              <div id="section-finder">
                <ZodiacFinder
                  selectedZodiac={selectedZodiac}
                  onSelectZodiac={setSelectedZodiac}
                  onProceedToDesign={handleProceedToDesign}
                  genderMode={genderMode}
                  onToggleGender={setGenderMode}
                />
              </div>

              {/* Menu 2 Section: Desain Pilihan Pakaianmu Sesuai Zodiak */}
              <div id="section-studio">
                <ZodiacOutfitStudio
                  selectedZodiac={selectedZodiac}
                  onSelectZodiac={setSelectedZodiac}
                  onSaveDesign={handleSaveDesign}
                  onOpenCertificate={(design) => setActiveCertificate(design)}
                  genderMode={genderMode}
                  onToggleGender={setGenderMode}
                />
              </div>
            </div>

            <PhilosophySection />
          </div>
        )}

        {/* Menu 1 Dedicated Tab: Ketahui Zodiakmu */}
        {activeTab === 'find-zodiac' && (
          <div className="space-y-12">
            <div className="border-b border-[#d4af37]/20 bg-[#080b13]/60 backdrop-blur-sm">
              <CelestialZodiacWheel
                selectedZodiac={selectedZodiac}
                onSelectZodiac={setSelectedZodiac}
              />
            </div>
            <div className="max-w-7xl mx-auto px-6 pb-16">
              <ZodiacFinder
                selectedZodiac={selectedZodiac}
                onSelectZodiac={setSelectedZodiac}
                onProceedToDesign={handleProceedToDesign}
                genderMode={genderMode}
                onToggleGender={setGenderMode}
              />
            </div>
          </div>
        )}

        {/* Menu 2 Dedicated Tab: Desain Pilihan Pakaianmu Sesuai Zodiak */}
        {activeTab === 'design-outfit' && (
          <div className="space-y-12">
            <div className="border-b border-[#d4af37]/20 bg-[#080b13]/60 backdrop-blur-sm">
              <CelestialZodiacWheel
                selectedZodiac={selectedZodiac}
                onSelectZodiac={setSelectedZodiac}
              />
            </div>
            <div className="max-w-7xl mx-auto px-6 pb-16">
              <ZodiacOutfitStudio
                selectedZodiac={selectedZodiac}
                onSelectZodiac={setSelectedZodiac}
                onSaveDesign={handleSaveDesign}
                onOpenCertificate={(design) => setActiveCertificate(design)}
                genderMode={genderMode}
                onToggleGender={setGenderMode}
              />
            </div>
          </div>
        )}
      </main>

      {/* Lookbook Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        savedDesigns={savedDesigns}
        onDeleteDesign={handleDeleteDesign}
        onOpenCertificate={(design) => {
          setIsLookbookOpen(false);
          setActiveCertificate(design);
        }}
        onGoToStudio={() => {
          setIsLookbookOpen(false);
          setActiveTab('design-outfit');
        }}
      />

      {/* Bespoke Certificate Modal */}
      <BespokeCertificateModal
        design={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}
