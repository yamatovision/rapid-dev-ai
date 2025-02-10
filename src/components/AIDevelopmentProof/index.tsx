'use client'
import { motion } from 'framer-motion'

export const AIDevelopmentProof = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-green-400 text-2xl">●</div>
            <div className="text-white font-bold">現在進行形のAI開発</div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            このページも、AIが3時間で開発しています
          </h3>
          <p className="text-gray-300 mb-6">
            デザイン設計から実装まで、AIが主導で開発を行い、人間はプロンプトの入力とレビューに専念。
            従来の開発と比べて驚異的な開発スピードと品質を実現しています。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-orange-500">3時間</div>
              <div className="text-sm text-gray-400">総開発時間</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-orange-500">90%</div>
              <div className="text-sm text-gray-400">AI生成率</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-orange-500">100%</div>
              <div className="text-sm text-gray-400">品質保証</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
