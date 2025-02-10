'use client'
import { motion } from 'framer-motion'
import { BoltIcon, CpuChipIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const Features = () => {
  const features = [
    {
      icon: <BoltIcon className="text-orange-500 w-full h-full" />,
      title: "爆速開発力",
      points: [
        "AI自動コード生成による圧倒的な開発スピード",
        "実績：400ファイル規模のアプリを30日で完成",
        "従来の1/3の期間で開発完了"
      ]
    },
    {
      icon: <CpuChipIcon className="text-orange-500 w-full h-full" />,
      title: "最新AI技術の実装力",
      points: [
        "ChatGPT/Claude等の最新AI実装",
        "RAG搭載チャットボットの開発",
        "AI画像生成による自動クリエイティブ生成"
      ]
    },
    {
      icon: <CurrencyDollarIcon className="text-orange-500 w-full h-full" />,
      title: "コストパフォーマンス",
      points: [
        "従来比30-50%のコスト削減",
        "保守運用コストの大幅削減",
        "スモールスタート可能な料金体系"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-orange-500">AI搭載</span>だから実現できる
            <br />3つの革新的な特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-3 text-gray-300 text-left">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features