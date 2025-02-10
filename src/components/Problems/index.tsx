'use client'
import { motion } from 'framer-motion'

export const Problems = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            従来の開発が抱える<span className="text-orange-500">3つの課題</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">長い開発期間</h3>
              <p>要件定義から開発完了まで3-6ヶ月が一般的</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">高額な開発費</h3>
              <p>エンジニア3-4人×3ヶ月で1500-2000万円</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">不安定な品質</h3>
              <p>属人的な開発による品質のバラつき</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
