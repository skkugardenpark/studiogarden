'use client';

import { motion, Variants, cubicBezier } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

  // 배경 원 애니메이션
  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1, ease: customEase }
    }
  };

  // 텍스트 애니메이션
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: customEase }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-garden-green-500/10 to-garden-indigo-500/10 blur-3xl"
        />
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-garden-green-500/10 to-garden-indigo-500/10 blur-3xl"
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-garden-green-500/20 shadow-garden mb-6">
            <span className="animate-pulse-soft text-garden-green-500">●</span>
            <span className="text-sm font-medium">프로젝트 문의 접수 중</span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text animate-gradient">감성적이고 현대적인</span>
          <br />
          웹사이트 제작
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Garden Studio는 브랜드의 가치를 담아내는 웹 디자인과
          <br className="hidden md:block" />
          최신 기술로 구현하는 웹 개발 서비스를 제공합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-bounce px-8 py-4 bg-garden-green-500 text-white rounded-full hover:bg-garden-green-600 transition-all duration-300 font-medium shadow-garden hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
          >
            <span>프로젝트 상담하기</span>
            <span className="animate-pulse-soft">🌿</span>
          </button>
          <button
            onClick={scrollToServices}
            className="btn-bounce px-8 py-4 glass-effect text-gray-700 rounded-full hover:bg-white/90 transition-all duration-300 font-medium hover:border-garden-green-500/30 flex items-center space-x-2"
          >
            <span>서비스 둘러보기</span>
            <span className="animate-float">✨</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-20"
        >
          {[
            { number: '50+', label: '프로젝트 완료' },
            { number: '100%', label: '고객 만족도' },
            { number: '24시간', label: '빠른 응답' },
            { number: '1개월', label: '기본 유지보수' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover-card"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
            onClick={scrollToServices}
          >
            <ArrowDown className="w-6 h-6 text-garden-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 