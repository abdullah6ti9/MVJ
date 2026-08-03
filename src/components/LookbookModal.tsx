import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMaterial: (materialName: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({ isOpen, onClose, onSelectMaterial }) => {
  const [selectedCategory, setSelectedCategory] = useState<'Wood' | 'Metal' | 'Stone' | 'Glass'>('Wood');

  if (!isOpen) return null;

  const materials = [
    {
      name: 'Architectural Burnished Copper',
      category: 'Metal',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
      description: 'Hand-patinated copper flashing, standing seam roofing, and custom entrance portals that develop a rich protective patina over decades.',
      durability: '100+ Years',
      origin: 'Custom Metalwork Craftsmanship'
    },
    {
      name: 'Sustainably Sourced Western Red Cedar',
      category: 'Wood',
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=600&q=80',
      description: 'Clear grain vertical siding treated with non-toxic Japanese Shou Sugi Ban charring for natural fire and insect resistance.',
      durability: '50+ Years',
      origin: 'Pacific Northwest Forestry'
    },
    {
      name: 'Board-Formed Architectural Concrete',
      category: 'Stone',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
      description: 'High-density poured concrete retaining wood grain textures from custom timber molds, creating timeless organic structural walls.',
      durability: 'Indefinite',
      origin: 'On-site Precision Pouring'
    },
    {
      name: 'Triple-Pane Argon Low-E Glass',
      category: 'Glass',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      description: 'Floor-to-ceiling structural window systems providing R-10 thermal insulation and 99% UV blockage without optical distortion.',
      durability: '40+ Years',
      origin: 'German Precision Engineering'
    }
  ];

  const filtered = materials.filter((m) => m.category === selectedCategory);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl rounded-[4px] bg-[#F3EFE9] p-6 sm:p-8 shadow-2xl border border-[#E8E2D9] max-h-[90vh] overflow-y-auto"
        >
          <button
            id="close-lookbook-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#5C5C5C] hover:text-[#1A1A1A] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#B87333] font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Material Palette Lookbook</span>
              </span>
              <h3 className="font-serif text-3xl text-[#1A1A1A] font-medium mt-1">
                Authentic Architectural Elements
              </h3>
              <p className="text-sm text-[#5C5C5C] font-sans mt-1">
                Explore the raw textures, metals, and woods that define MJV Construction’s signature aesthetic.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2 border-b border-[#E8E2D9] pb-3">
              {(['Wood', 'Metal', 'Stone', 'Glass'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#B87333] text-white shadow'
                      : 'bg-white text-[#5C5C5C] hover:bg-[#E8E2D9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Material Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((mat, i) => (
                <div key={i} className="bg-white rounded-[4px] overflow-hidden border border-[#E8E2D9] space-y-4 p-4 shadow-sm">
                  <div className="aspect-[16/9] overflow-hidden rounded-[4px] bg-[#1A1A1A]">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#1A1A1A] font-medium">{mat.name}</h4>
                    <p className="text-xs text-[#5C5C5C] mt-2 leading-relaxed">{mat.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-[#E8E2D9] text-[#5C5C5C]">
                    <div>
                      <span className="block text-[#1A1A1A] font-semibold">Durability:</span>
                      {mat.durability}
                    </div>
                    <div>
                      <span className="block text-[#1A1A1A] font-semibold">Provenance:</span>
                      {mat.origin}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectMaterial(mat.name);
                    }}
                    className="w-full py-2.5 px-3 rounded-[4px] bg-[#1A1A1A] text-white hover:bg-[#B87333] text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <span>Specify in My Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
