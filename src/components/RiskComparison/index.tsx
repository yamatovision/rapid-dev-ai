'use client'
import { motion } from 'framer-motion'

export const RiskComparison = () => {
  const comparisons = [
    {
      title: "従来の開発会社",
      risks: [
        "要件定義だけで数百万円の費用が発生",
        "イメージと違う成果物で手戻りの危険",
        "修正の度に追加コストが発生",
        "完成まで実物が確認できない"
      ],
      alert: "平均的な失敗コスト：500-1000万円の損失",
      className: "bg-red-50 border-red-200",
      iconColor: "text-red-500"
    },
    {
      title: "当社のアプローチ",
      benefits: [
        "要件定義から無料で対応",
        "モックアップで事前に完成形を確認可能",
        "AI活用による柔軟な修正対応",
        "成果物を確認してから契約判断可能"
      ],
      success: "リスクゼロで開発をスタート",
      className: "bg-green-50 border-green-200",
      iconColor: "text-green-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            失敗しないAI開発の選び方
          </h2>
          <p className="text-gray-600 text-lg">
            開発リスクを最小限に抑え、確実な成功へ導きます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-xl p-6 border-2 ${item.className}`}
            >
              <h3 className="text-xl font-bold mb-6">{item.title}</h3>
              <ul className="space-y-4">
                {(item.risks || item.benefits)?.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start">
                    <span className={`mr-2 ${item.iconColor}`}>
                      {item.risks ? '⚠️' : '✓'}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className={`mt-6 p-4 rounded-lg ${
                item.risks ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                <p className="font-bold">
                  {item.alert || item.success}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all">
            無料相談で開発リスクを確認する
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default RiskComparison
