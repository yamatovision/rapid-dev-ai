'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useWidgetLoader } from '@/hooks/useWidgetLoader'

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isWidgetLoading, loadWidget } = useWidgetLoader()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = async () => {
    await loadWidget()
  }

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="bg-white rounded-lg shadow-xl p-4 border border-orange-100">
            <div className="text-center">
              <p className="font-bold text-gray-800 mb-2">
                まずは無料でAIに相談する
              </p>
              <p className="text-sm text-gray-600 mb-4">
                クリックしてチャットですぐに相談
              </p>
              <button 
                className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all ${
                  isWidgetLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleClick}
                disabled={isWidgetLoading}
              >
                {isWidgetLoading ? '読み込み中...' : 'AIとチャットで相談する'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default FloatingCTA