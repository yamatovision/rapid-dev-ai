'use client'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, CodeBracketIcon, CpuChipIcon } from '@heroicons/react/24/outline'

export const QualityAssurance = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "10年以上の実績を持つ開発チーム",
      description: "ベトナムのトップエンジニア集団による徹底的な品質検証。数多くのグローバルプロジェクトでの経験を活かし、安定性と拡張性を担保します。",
      stats: [
        { label: "開発実績", value: "700+" },
        { label: "品質保証率", value: "99.9%" }
      ]
    },
    {
      icon: CodeBracketIcon,
      title: "クリーンコード生成AI",
      description: "FAANG企業のコーディング基準を上回るClaude-3 Sonnetを活用。Google社員レベルの高品質なコードを生成します。",
      benchmarks: [
        {
          label: "Claude-3 Sonnet",
          value: "89.8%"
        },
        {
          label: "Google社員平均",
          value: "84.2%"
        },
        {
          label: "一般エンジニア平均",
          value: "71.4%"
        }
      ]
    },
    {
      icon: CpuChipIcon,
      title: "品質へのこだわり",
      description: "AIの最新技術と熟練エンジニアの経験を組み合わせることで、高品質なシステムを迅速に提供します。すべてのコードは厳格な品質基準をクリアし、安定した稼働を実現します。",
      stats: [
        { label: "HumanEval Score", value: "89.8%" },
        { label: "MBPP Score", value: "90.2%" },
 
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            信頼性の高い<span className="text-orange-500">品質保証体制</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AIの力と熟練のエンジニアチームによる二重の品質保証で、
            安定性と拡張性を両立したシステムを提供します
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all group"
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>
              </div>

              {/* メインの統計データ */}
              {feature.stats && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="text-orange-500 font-bold text-lg">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ベンチマークの比較データ */}
              {feature.benchmarks && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <div className="text-sm font-medium text-gray-400 mb-3">業界比較</div>
                  {feature.benchmarks.map((benchmark, benchIndex) => (
                    <div key={benchIndex} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{benchmark.label}</span>
                        <span className="text-orange-500">{benchmark.value}</span>
                      </div>
                      <div className="w-full bg-gray-900/50 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: benchmark.value,
                            backgroundColor: benchIndex === 0 ? '#f97316' : '#f97316aa'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityAssurance