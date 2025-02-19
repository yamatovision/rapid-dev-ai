'use client'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { useScrollToElement } from '@/hooks/useScrollToElement'
import { useState } from 'react' // useEffectを削除

export const Hero = () => {
  const scrollToElement = useScrollToElement()
  const [isWidgetLoading, setIsWidgetLoading] = useState(false)
  
  const achievements = [
    {
      number: 6,
      suffix: "分の1",
      label: "開発期間",
      sublabel: "専門家採用なしで"
    },
    {
      number: 70,
      suffix: "%",
      label: "コスト削減",
      sublabel: "追加人員なしで"
    },
    {
      number: 8,
      suffix: "桁",
      label: "売上実績",
      sublabel: "既存スタッフだけで"
    }
  ]

  const handleConsultationClick = async () => {
    if (isWidgetLoading) return;
    setIsWidgetLoading(true);
    
    const loadScript = (src: string) => new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });
  
    try {
      // 依存関係を順番に読み込み
      const dependencies = [
        'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/@mui/material@5.15.14/umd/material-ui.production.min.js',
        'https://cdn.jsdelivr.net/npm/@emotion/react@11.11.3/dist/emotion-react.umd.min.js',
        'https://cdn.jsdelivr.net/npm/@emotion/styled@11.11.0/dist/emotion-styled.umd.min.js'
      ];
  
      for (const src of dependencies) {
        await loadScript(src);
      }
  
      // 環境に応じたウィジェットURLの設定
      const widgetUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5174/dist/index.umd.js'
        : 'https://aibookingbot-widget.web.app/index.umd.js';
  
      await loadScript(widgetUrl);
  
      if (window.AIChatWidget) {
        window.AIChatWidget.init({
          clientId: process.env.NEXT_PUBLIC_WIDGET_CLIENT_ID || 'YOUR_CLIENT_ID',
          theme: {
            primary: '#ff502b'
          },
          displayMode: 'modal',
          container: `ai-chat-widget-container-${Math.random().toString(36).substr(2, 9)}`
        });
      }
    } catch (error) {
      console.error('Failed to load widget:', error);
    } finally {
      setIsWidgetLoading(false);
    }
  };
  




  
  const handleCaseStudyClick = () => {
    scrollToElement('contact-section', { offset: 100 })
    window.dispatchEvent(new CustomEvent('switchContactTab', { 
      detail: {
        tab: 'document',
        selectDocument: 'case-studies'
      }
    }))
  }

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              30日で、
              <span className="block text-orange-500 mt-2">
                あなたのビジネスの収益性を改善するAIシステムを提供します
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              「社内にエンジニアがいない中小企業でも、
              AIの力で大手に負けない競争力を手に入れられます」
            </p>

            <div className="grid grid-cols-3 gap-6 my-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/50 p-6 rounded-lg text-center"
                >
                                    <div className="text-xs text-orange-400 mt-1">{achievement.sublabel}</div>

                  <div className="text-3xl font-bold text-orange-500">
                    <AnimatedCounter
                      from={0}
                      to={achievement.number}
                      suffix={achievement.suffix}
                    />
                  </div>
                  <div className="text-sm text-gray-300">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#ff502b] hover:bg-[#ff6b41] px-8 py-4 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleConsultationClick}
                disabled={isWidgetLoading}
              >
                {isWidgetLoading ? '読み込み中...' : '無料相談を予約する'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-bold"
                onClick={handleCaseStudyClick}
              >
                AIとチャットで相談する
              </motion.button>
            </div>
          </motion.div>

          {/* 右側：Vimeo動画 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[16/9]"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1055189317?badge=0&autopause=0&autoplay=1&loop=1&muted=1&background=1"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="AI開発デモ"
              />
              {/* オーバーレイ効果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40" />
            </div>
            
            {/* 実績バッジ */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg"
            >
              <div className="text-sm">実績</div>
              <div className="text-xl font-bold">8桁の売上達成</div>
            </motion.div>

            {/* 個別相談特典 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 bg-gray-800/50 p-6 rounded-lg border border-orange-500/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg 
                    className="w-8 h-8 text-orange-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-500">
                    個別相談特典
                  </h3>
                  <p className="text-gray-300 mt-2">
                    ご相談いただいた方には、以下を無料でご提供いたします：
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">①</span>
                      御社の業務のムダを可視化する無料診断
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">②</span>
                      AIDX化とシステム導入による利益向上シミュレーション
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">③</span>
                      カスタマイズされたモックアップの作成
                    </li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-400 italic">
                    ※ 上の動画はヒアリングからその場でモックアップ作成の様子です
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// TypeScript の型定義
declare global {
  interface Window {
    MaterialUI: object;
    emotionReact: object;
    emotionStyled: object;
    AIChatWidget: {
      init: (config: {
        clientId: string;
        theme: {
          primary: string;
        };
        displayMode: string;
        container: string;
      }) => void;
    };
  }
}

export default Hero