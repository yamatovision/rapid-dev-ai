'use client'
import { motion } from 'framer-motion'

export const DevelopmentComparison = () => {
  const comparisons = [
    {
      category: "開発期間",
      traditional: { value: "6ヶ月", percentage: 100 },
      ours: { value: "30日", percentage: 17 }
    },
    {
      category: "開発コスト",
      traditional: { value: "2000万円", percentage: 100 },
      ours: { value: "500万円", percentage: 25 }
    },
    {
      category: "保守運用コスト",
      traditional: { value: "月50万円", percentage: 100 },
      ours: { value: "月10万円", percentage: 20 }
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            従来の開発との比較
          </h2>
          <p className="text-gray-600">
            AIの活用で大幅なコストカットと期間短縮を実現
          </p>
        </motion.div>

        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold">{comparison.category}</span>
                <span className="text-green-500 font-bold">
                  {100 - comparison.ours.percentage}% 削減
                </span>
              </div>
              
              {/* 従来の開発 */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>従来の開発</span>
                  <span>{comparison.traditional.value}</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1 }}
                    className="h-full bg-red-400 rounded-full"
                  />
                </div>
              </div>

              {/* 当社の開発 */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>当社の開発</span>
                  <span>{comparison.ours.value}</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${comparison.ours.percentage}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-green-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}