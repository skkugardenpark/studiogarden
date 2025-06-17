'use client';

import { motion, Variants, cubicBezier } from 'framer-motion';
import { MessageCircle, FileText, Search, Palette, Code, CheckCircle } from 'lucide-react';

const Process = () => {
  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: customEase
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: customEase
      }
    }
  };

  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: '상담 및 니즈 파악',
      description: '고객의 요구사항과 목표를 정확히 파악하여 프로젝트의 방향성을 설정합니다.',
      details: ['비즈니스 목표 분석', '타겟 사용자 정의', '기능 요구사항 정리', '예산 및 일정 협의'],
      duration: '1-2일',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      icon: FileText,
      title: '구성안 및 견적 제안',
      description: '분석된 내용을 바탕으로 상세한 제안서와 견적을 작성하여 제공합니다.',
      details: ['사이트맵 작성', '기능 명세서 정리', '디자인 컨셉 제안', '상세 견적서 제공'],
      duration: '2-3일',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      icon: Search,
      title: '자료 수집 및 기획 확정',
      description: '필요한 콘텐츠와 자료를 수집하고 최종 기획안을 확정합니다.',
      details: ['콘텐츠 자료 수집', '브랜드 가이드라인 정리', '레퍼런스 사이트 분석', '최종 기획안 승인'],
      duration: '3-5일',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 4,
      icon: Palette,
      title: '시안 제작 및 피드백',
      description: '브랜드에 맞는 디자인 시안을 제작하고 고객의 피드백을 반영합니다.',
      details: ['와이어프레임 작성', '디자인 시안 제작', '고객 피드백 수렴', '디자인 수정 및 보완'],
      duration: '5-7일',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 5,
      icon: Code,
      title: '최종 구현',
      description: '확정된 디자인을 바탕으로 실제 웹사이트를 개발하고 구축합니다.',
      details: ['프론트엔드 개발', '백엔드 시스템 구축', '반응형 최적화', '성능 최적화'],
      duration: '7-14일',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 6,
      icon: CheckCircle,
      title: '테스트 및 납품',
      description: '철저한 테스트를 거쳐 완성된 웹사이트를 배포하고 납품합니다.',
      details: ['기능 테스트', '브라우저 호환성 확인', '성능 테스트', '배포 및 도메인 연결'],
      duration: '2-3일',
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: customEase }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">체계적인</span> 제작 과정
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Garden Studio는 체계적이고 투명한 프로세스를 통해 고품질의 웹사이트를 제작합니다. 
            각 단계별로 고객과 소통하며 만족스러운 결과물을 만들어갑니다.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="flex flex-col space-y-4">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-center space-x-4">
                  {/* Step Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold gradient-text">0{step.id}</span>
                    <span className="text-sm text-gray-500">{step.duration}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="glass-effect rounded-2xl p-6 hover-card h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-garden-green-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Details */}
                    <div className="grid grid-cols-1 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-garden-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 hover-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                총 제작 기간: <span className="gradient-text">1-3주</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                프로젝트 규모와 복잡도에 따라 기간은 조정될 수 있으며, 
                각 단계마다 고객의 피드백을 충분히 반영하여 진행합니다.
              </p>
            </div>

            {/* Process Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-garden-green-500 to-garden-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">투명한 소통</h4>
                <p className="text-sm text-gray-600">각 단계별 진행 상황을 실시간으로 공유하고 피드백을 반영합니다.</p>
              </div>
              
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-garden-indigo-500 to-garden-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">품질 보장</h4>
                <p className="text-sm text-gray-600">철저한 테스트와 검증을 통해 최고 품질의 결과물을 제공합니다.</p>
              </div>
              
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-garden-green-500 to-garden-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">최신 기술</h4>
                <p className="text-sm text-gray-600">최신 웹 기술과 트렌드를 적용하여 미래를 대비한 웹사이트를 제작합니다.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 