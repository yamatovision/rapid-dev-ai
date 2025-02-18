'use client'
import { motion } from 'framer-motion'

export const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            日本のディジタル競争力を
            <span className="text-orange-500">世界No.1</span>に
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            AIによる爆発的生産性を活かして日本人の職人気質特有のサービス精神を形にすることで
            日本の生産性を引き上げてディジタル競争力を世界No.1にし
            日本を豊かにすることが私たちの使命です
          </p>

          <div className="bg-gray-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              大和ViSiON
            </h3>
            <p className="text-gray-300">
              明治維新のように日本古来からの伝統と最新の知見を組み合わせることで
              世界に対して競争力の強い日本を取り戻すことがビジョンです
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
