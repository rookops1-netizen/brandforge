'use client';

import { BusinessName, BrandKit as BrandKitType } from '@/types';
import { X, Sparkles, Palette, Type, Globe, Lock, CreditCard, Check, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BrandKitModalProps {
  name: BusinessName;
  onClose: () => void;
}

export default function BrandKitModal({ name, onClose }: BrandKitModalProps) {
  const [kit, setKit] = useState<BrandKitType | null>(null);
  const [loading, setLoading] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchKit() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/brand-kit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            businessName: name.name,
            meaning: name.meaning,
            style: name.style,
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || 'Failed to generate brand kit');
        }
        const data = await res.json();
        setKit(data.kit);
      } catch (err: any) {
        setError(err.message || 'Failed to generate brand kit');
      } finally {
        setLoading(false);
      }
    }
    fetchKit();
  }, [name.name, name.meaning, name.style]);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName: name.name }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to start checkout');
      }
    } catch (err: any) {
      setError(err.message || 'Checkout failed');
      setCheckingOut(false);
    }
  };

  const handleViewFullKit = () => {
    const params = new URLSearchParams({
      name: name.name,
      meaning: name.meaning,
      style: name.style,
    });
    window.location.href = `/brand-kit?${params.toString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-600 to-purple-600 px-8 py-10 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium text-brand-100">Brand Kit Preview</span>
            </div>
            <h2 className="text-3xl font-bold">{name.name}</h2>
            <p className="mt-1 text-brand-100 text-sm">{name.style} style</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-brand-500" />
              <span className="ml-2 text-gray-500">Creating your brand kit...</span>
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {kit && !loading && (
            <>
              {/* Logo Concept */}
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-brand-500" />
                  <h3 className="font-semibold text-gray-900">Logo Concept</h3>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center">
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold"
                    style={{ backgroundColor: kit.colorPalette.primary, color: '#ffffff' }}
                  >
                    {kit.name.charAt(0)}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {kit.logoConcept.substring(0, 120)}...
                  <span className="ml-1 text-brand-600 font-medium">Unlock full concept →</span>
                </p>
              </div>

              {/* Color Palette */}
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="h-4 w-4 text-brand-500" />
                  <h3 className="font-semibold text-gray-900">Color Palette</h3>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { color: kit.colorPalette.primary, label: 'Primary' },
                    { color: kit.colorPalette.secondary, label: 'Secondary' },
                    { color: kit.colorPalette.accent, label: 'Accent' },
                    { color: kit.colorPalette.background, label: 'Background' },
                    { color: kit.colorPalette.text, label: 'Text' },
                  ].map((swatch) => (
                    <div key={swatch.label} className="text-center">
                      <div
                        className="mx-auto h-12 w-12 rounded-lg shadow-sm ring-1 ring-black/5"
                        style={{ backgroundColor: swatch.color }}
                      />
                      <p className="mt-1 text-xs text-gray-400">••••••</p>
                      <p className="text-xs text-brand-600">Unlock</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Type className="h-4 w-4 text-brand-500" />
                  <h3 className="font-semibold text-gray-900">Tagline</h3>
                </div>
                <p className="text-sm italic text-gray-400">
                  &ldquo;{kit.tagline.substring(0, 25)}...&rdquo;
                </p>
              </div>

              {/* Domain & Social — locked */}
              <div className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-brand-500" />
                  <h3 className="font-semibold text-gray-900">Domain & Social Availability</h3>
                  <Lock className="h-3 w-3 text-gray-400" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-gray-50 p-3 text-center">
                    <Globe className="mx-auto h-4 w-4 text-gray-400" />
                    <p className="mt-1 text-xs text-gray-500">.com</p>
                    <span className="text-xs text-brand-600">Unlock</span>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 text-center">
                    <p className="text-sm">🐦</p>
                    <p className="mt-1 text-xs text-gray-500">Twitter</p>
                    <span className="text-xs text-brand-600">Unlock</span>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 text-center">
                    <p className="text-sm">📸</p>
                    <p className="mt-1 text-xs text-gray-500">Instagram</p>
                    <span className="text-xs text-brand-600">Unlock</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-r from-brand-50 to-purple-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Unlock the Full Brand Kit</p>
                    <p className="text-sm text-gray-600">Get logo concepts, full color palette, tagline, and domain/social checks</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleViewFullKit}
                      className="flex items-center gap-2 rounded-xl border border-brand-600 px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                    >
                      View Full Kit
                    </button>
                    <button
                      onClick={handleCheckout}
                      disabled={checkingOut}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-brand-700 hover:to-purple-700 transition-all disabled:opacity-50"
                    >
                      <CreditCard className="h-4 w-4" />
                      {checkingOut ? 'Processing...' : '$9'}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}