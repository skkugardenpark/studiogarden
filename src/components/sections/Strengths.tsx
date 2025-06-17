'use client';

import { motion } from 'framer-motion';
import { Users, Palette, Shield, Zap } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      icon: Users,
      title: '1:1 맞춤 컨설팅',
      description: '단순한 제작이 아니라, 브랜드의 목적에 맞춘 전문적인 1:1 상담과 기획으로 시작합니다. 처음 홈페이지를 만드는 분도 안심하고 진행할 수 있어요.',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Palette,
      title: '반응형 & 감성 디자인',
      description: 'PC와 모바일에 모두 최적화된 반응형 구조. 브랜드의 개성을 담아내는 감각적인 디자인을 제안합니다.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: '지속적인 유지보수',
      description: '홈페이지는 납품으로 끝나지 않습니다. 1개월의 기본 유지보수와 이후 유연한 관리 플랜을 제공합니다.',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      iconBg: 'bg-garden-green-500'
    },
    {
      icon: Zap,
      title: '빠르고 정확한 제작 속도',
      description: '기본형은 7일 이내 빠르게 완성! 일정 준수와 민첩한 피드백으로 스트레스 없는 진행을 보장합니다.',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-garden-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-garden-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-garden-green-500/10 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-garden-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-garden-green-600">신뢰할 수 있는 이유</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Garden Studio의 <span className="text-garden-green-500">특별한 강점</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            단순한 웹사이트 제작을 넘어, 당신의 브랜드와 함께 성장하는 
            <br className="hidden md:block" />
            신뢰할 수 있는 파트너가 되어드리겠습니다.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className={`relative ${strength.bgColor} rounded-3xl p-8 h-full border border-gray-100 hover:border-garden-green-500/20 transition-all duration-300 hover:shadow-xl overflow-hidden`}>
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${strength.color} rounded-full filter blur-2xl`}></div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${strength.iconBg} rounded-2xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <strength.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-garden-green-600 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {strength.description}
                  </p>

                  {/* Subtle Call to Action */}
                  <div className="flex items-center space-x-2 text-garden-green-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">자세히 알아보기</span>
                    <div className="w-4 h-4 rounded-full bg-garden-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-garden-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-garden-green-500/0 group-hover:ring-garden-green-500/20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-garden-green-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-garden-green-500/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              이런 장점들이 궁금하시다면?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Garden Studio와 함께하는 특별한 경험을 지금 바로 시작해보세요. 
              무료 상담으로 당신만의 맞춤 솔루션을 찾아드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-garden-green-500 text-white rounded-full hover:bg-garden-green-600 transition-all duration-300 font-medium shadow-garden hover:shadow-lg transform hover:scale-105"
              >
                무료 상담 신청하기 ✨
              </button>
              
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-all duration-300 font-medium border border-gray-200 hover:border-garden-green-500/30"
              >
                포트폴리오 보기
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '24H', label: '평균 응답 시간' },
              { number: '1년', label: '무료 유지보수' },
              { number: '100%', label: '고객 만족도' },
              { number: '7일', label: '기본 제작 기간' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-garden-green-500">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths; 