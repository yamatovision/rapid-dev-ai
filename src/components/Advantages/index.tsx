'use client'
import { motion } from 'framer-motion'

export const Advantages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            従来の開発と<span className="text-orange-500">AI開発</span>の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">比較項目</th>
                  <th className="p-4 text-left">従来の開発</th>
                  <th className="p-4 text-left bg-orange-500">当社のAI開発</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">開発期間</td>
                  <td className="p-4">3-6ヶ月</td>
                  <td className="p-4 text-orange-500 font-bold">30日</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-bold">開発コスト</td>
                  <td className="p-4">700万円-5000万円</td>
                  <td className="p-4 text-orange-500 font-bold">100万円-700万円</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">AI機能</td>
                  <td className="p-4">別途開発が必要</td>
                  <td className="p-4 text-orange-500 font-bold">標準搭載</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-bold">拡張性</td>
                  <td className="p-4">再開発が必要</td>
                  <td className="p-4 text-orange-500 font-bold">自動学習で進化</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">保守運用</td>
                  <td className="p-4">常時エンジニアが必要</td>
                  <td className="p-4 text-orange-500 font-bold">自己最適化で省人化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
