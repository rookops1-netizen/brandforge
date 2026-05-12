'use client'

import { BusinessName } from '@/types'
import { useState, useCallback } from 'react'
import NameCard from './NameCard'
import BrandKitModal from './BrandKitModal'
import { Heart, Grid3X3 } from 'lucide-react'

interface NameResultsGridProps {
  names: BusinessName[]
  onToggleFavorite: (id: string) => void
}

type FilterMode = 'all' | 'favorites'

export default function NameResultsGrid({
  names,
  onToggleFavorite,
}: NameResultsGridProps) {
  const [selectedName, setSelectedName] = useState<BusinessName | null>(null)
  const [filter, setFilter] = useState<FilterMode>('all')

  const handleSelect = useCallback((name: BusinessName) => {
    setSelectedName(name)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedName(null)
  }, [])

  if (names.length === 0) {
    return null
  }

  const favoriteCount = names.filter((n) => n.isFavorite).length
  const filteredNames = filter === 'favorites' ? names.filter((n) => n.isFavorite) : names

  return (
    <>
      <div className="mt-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Generated Names
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {names.length} name{names.length !== 1 ? 's' : ''} created
            </span>

            {/* Filter tabs */}
            <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-0.5">
              <button
                onClick={() => setFilter('all')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid3X3 className="h-3.5 w-3.5" />
                All
              </button>
              <button
                onClick={() => setFilter('favorites')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === 'favorites'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${filter === 'favorites' ? 'fill-current text-red-500' : ''}`} />
                Favorites
                {favoriteCount > 0 && (
                  <span className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                    filter === 'favorites'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {favoriteCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {filteredNames.length === 0 && filter === 'favorites' ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-200 py-16 text-center">
            <Heart className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-3 text-sm font-medium text-gray-500">No favorites yet</p>
            <p className="mt-1 text-xs text-gray-400">Click the heart icon on any name to save it</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNames.map((name, index) => (
              <NameCard
                key={name.id}
                name={name}
                onToggleFavorite={onToggleFavorite}
                onSelect={handleSelect}
                index={index}
              />
            ))}
          </div>
        )}
      </div>

      {selectedName && (
        <BrandKitModal name={selectedName} onClose={handleCloseModal} />
      )}
    </>
  )
}