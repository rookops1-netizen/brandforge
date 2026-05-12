'use client';

import { BrandKit } from '@/types';

export default function BrandKitDisplay({ kit, paid }: { kit: BrandKit; paid: boolean }) {
  const paletteEntries = [
    { label: 'Primary', hex: kit.colorPalette.primary },
    { label: 'Secondary', hex: kit.colorPalette.secondary },
    { label: 'Accent', hex: kit.colorPalette.accent },
    { label: 'Background', hex: kit.colorPalette.background },
    { label: 'Text', hex: kit.colorPalette.text },
  ];

  return (
    <div className="space-y-8">
      {/* Name Header */}
      <div className="text-center py-8 bg-gradient-to-r from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 rounded-xl">
        <h2 className="text-4xl font-extrabold gradient-text">{kit.name}</h2>
      </div>

      {/* Logo Concept */}
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
        <h3 className="text-lg font-semibold mb-3">💡 Logo Concept</h3>
        {paid ? (
          <p className="text-gray-700 dark:text-gray-300">{kit.logoConcept}</p>
        ) : (
          <p className="text-gray-400 dark:text-gray-500">
            {kit.logoConcept.substring(0, 80)}...
            <span className="text-brand-600 ml-2 cursor-pointer">Upgrade to see full concept</span>
          </p>
        )}
      </div>

      {/* Color Palette */}
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
        <h3 className="text-lg font-semibold mb-3">🎨 Color Palette{kit.colorPalette.name ? ` — ${kit.colorPalette.name}` : ''}</h3>
        <div className="grid grid-cols-5 gap-3">
          {paletteEntries.map(({ label, hex }) => (
            <div key={label} className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2 border border-gray-200"
                style={{ backgroundColor: hex }}
              />
              {paid ? (
                <>
                  <p className="font-mono text-sm">{hex}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </>
              ) : (
                <>
                  <p className="font-mono text-sm text-gray-400">••••••</p>
                  <p className="text-xs text-brand-600">Unlock</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
        <h3 className="text-lg font-semibold mb-3">✨ Tagline</h3>
        {paid ? (
          <p className="text-xl italic text-gray-700 dark:text-gray-300">&ldquo;{kit.tagline}&rdquo;</p>
        ) : (
          <p className="text-xl italic text-gray-400">&ldquo;{kit.tagline.substring(0, 25)}...&rdquo;</p>
        )}
      </div>

      {/* Typography */}
      {paid && kit.typography && (
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">📝 Typography</h3>
          <div className="flex gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Heading</p>
              <p className="text-xl font-bold">{kit.typography.heading}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Body</p>
              <p className="text-lg">{kit.typography.body}</p>
            </div>
          </div>
        </div>
      )}

      {/* Domain & Social Availability */}
      {paid ? (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl text-center">
            <h4 className="font-semibold mb-2">🌐 Domain</h4>
            <p className={`text-lg font-bold ${kit.domainAvailable ? 'text-green-600' : 'text-red-500'}`}>
              {kit.domainAvailable ? 'Available' : 'Taken'}
            </p>
            <p className="text-sm text-gray-500">{kit.name.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl text-center">
            <h4 className="font-semibold mb-2">🐦 Twitter</h4>
            <p className={`text-lg font-bold ${kit.socialHandles.twitter.available ? 'text-green-600' : 'text-red-500'}`}>
              {kit.socialHandles.twitter.available ? 'Available' : 'Taken'}
            </p>
            <p className="text-sm text-gray-500">@{kit.socialHandles.twitter.handle}</p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl text-center">
            <h4 className="font-semibold mb-2">📸 Instagram</h4>
            <p className={`text-lg font-bold ${kit.socialHandles.instagram.available ? 'text-green-600' : 'text-red-500'}`}>
              {kit.socialHandles.instagram.available ? 'Available' : 'Taken'}
            </p>
            <p className="text-sm text-gray-500">@{kit.socialHandles.instagram.handle}</p>
          </div>
        </div>
      ) : (
        <div className="p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-center text-gray-400">
          <p>🔒 Domain &amp; social availability checks require the paid tier</p>
        </div>
      )}
    </div>
  );
}