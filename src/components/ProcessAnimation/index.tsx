'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  {
    id: 1,
    title: "収益見込み算出",
    description: "AIが現状を分析し、具体的な数値予測を提示",
    icon: "📊",
    items: [
      "現状分析",
      "改善ポイント特定",
      "具体的な数値予測"
    ]
  },
  {
    id: 2,
    title: "モックアップ作成",
    description: "5日以内に具体的な実装イメージをご提供",
    icon: "🎨",
    items: [
      "要件定義",
      "画面設計",
      "実装計画策定"
    ]
  },
  {
    id: 3,
    title: "爆速開発",
    description: "30日での確実な納品を実現",
    icon: "🚀",
    items: [
      "AI活用による開発",
      "品質検証",
      "運用体制構築"
    ]
  }
]

export const ProcessAnimation = () => {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            3ステップで<span className="text-orange-500">収益化</span>を実現
          </h2>
          <p className="text-gray-400">
            AIの力で、スピーディーに成果を出します
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (step.id - 1) * 0.2 }}
              className={`relative cursor-pointer group ${
                activeStep === step.id ? 'scale-105' : ''
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`
                p-8 rounded-xl transition-all duration-300
                ${activeStep === step.id 
                  ? 'bg-orange-500 transform scale-105' 
                  : 'bg-gray-800 group-hover:bg-gray-700'}
              `}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  STEP {step.id}：{step.title}
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  {step.description}
                </p>
                <ul className="text-sm space-y-2">
                  {step.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {step.id < steps.length && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-500" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold transition-all">
            無料相談を予約する
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessAnimation
