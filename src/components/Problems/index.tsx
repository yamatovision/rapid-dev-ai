'use client'
import { motion } from 'framer-motion'
import { ArrowTrendingUpIcon, CurrencyDollarIcon, CogIcon, ChartBarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export const Problems = () => {
  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: "売上を向上させる",
      description: "AIによる新規マーケットの開拓",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CurrencyDollarIcon,
      title: "コストを削減する",
      description: "AIによる劇的な経費削減",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CogIcon,
      title: "業務を改善する",
      description: "AIによる爆速な業務革新",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ChartBarIcon,
      title: "意思決定を最適化する",
      description: "AIによる24/365の分析",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BuildingOfficeIcon,
      title: "収益モデルを変革する",
      description: "AIで実現する高収益ビジネス",
      color: "from-red-500 to-red-600"
    }
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            AI導入における<span className="text-orange-500">利益率向上の5つのパターン</span>
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg bg-gradient-to-br ${benefit.color} text-white relative overflow-hidden group`}
              >
                <div className="relative z-10">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/90">{benefit.description}</p>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-bg-transparent pattern-size-2 pattern-spacing-4" />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 mt-12"
          >
            個別相談では、ヒアリングを通じてあなたにぴったりな利益向上施策をご提案します
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}