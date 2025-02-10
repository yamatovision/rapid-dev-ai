'use client'
import { motion } from 'framer-motion'

export const QualityAssurance = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            AIシステムの品質と安定性
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">稼働実績</h3>
              <p className="text-gray-600">
                非エンジニアが開発したAIシステムが、すでに安定稼働し8桁の売上を達成しています。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">エラー修正AI</h3>
              <p className="text-gray-600">
                エラー修正専用AIにより、人間の数倍のスピードで問題を解決。24時間365日の安定運用を実現。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">継続的な最適化</h3>
              <p className="text-gray-600">
                AIによる24時間体制のシステム監視と自動最適化により、常に最高のパフォーマンスを維持。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
