'use client'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { useEffect, useRef } from 'react'

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoUrl = '/demo3.mov'

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.src = videoUrl
      
      console.log('Video initial state:', {
        readyState: video.readyState,
        networkState: video.networkState,
        src: video.src,
        paused: video.paused
      })

      video.onerror = () => {
        console.error('Video error:', {
          error: video.error,
          src: video.src,
          networkState: video.networkState
        })
      }

      video.onloadstart = () => {
        console.log('Video loading started')
      }

      video.onloadedmetadata = () => {
        console.log('Video metadata loaded')
      }
    }
  }, [videoUrl])

  const achievements = [
    {
      number: 16,
      suffix: "日",
      label: "開発期間",
      sublabel: "従来の開発期間3-6ヶ月"
    },
    {
      number: 1700,
      suffix: "万円",
      label: "相当の開発実績",
      sublabel: "8桁の売上を実現"
    },
    {
      number: 70,
      suffix: "%",
      label: "コスト削減",
      sublabel: "最大削減実績"
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            相談無料・設計無料
              <span className="block text-orange-500 mt-2">
              まずは &quot;できるか確認&quot;から始められるAI開発            </span>
            </h1>

            <div className="grid grid-cols-3 gap-6 my-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/50 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold text-orange-500">
                    <AnimatedCounter
                      from={0}
                      to={achievement.number}
                      suffix={achievement.suffix}
                    />
                  </div>
                  <div className="text-sm text-gray-300">{achievement.label}</div>
                  <div className="text-xs text-orange-400 mt-1">{achievement.sublabel}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold"
              >
                無料相談を申し込む
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-bold"
              >
                開発事例を見る
              </motion.button>
            </div>
          </motion.div>

          {/* 右側：動画表示 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              >
                <source src="/demo3.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              {/* オーバーレイ効果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40" />
            </div>
            {/* 実績バッジ */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg"
            >
              <div className="text-sm">月間売上</div>
              <div className="text-xl font-bold">8桁達成</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
