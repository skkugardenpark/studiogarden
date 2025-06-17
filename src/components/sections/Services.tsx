'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Rocket, Building, RefreshCw, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: '쇼핑몰',
      description: '매출 증대에 최적화된 전자상거래 플랫폼을 구축해드립니다. 사용자 경험을 고려한 직관적인 인터페이스와 안전한 결제 시스템으로 고객의 신뢰를 얻는 온라인 스토어를 만들어보세요.',
      features: ['반응형 디자인', '결제 시스템 연동', 'SEO 최적화', '관리자 대시보드'],
             color: 'bg-garden-green-500',
       shadowColor: 'shadow-garden'
    },
    {
      icon: Rocket,
      title: '랜딩페이지',
      description: '높은 전환율을 목표로 하는 맞춤형 랜딩페이지를 제작합니다. 브랜드의 핵심 메시지를 효과적으로 전달하고 방문자를 고객으로 전환시키는 전략적 디자인을 제공합니다.',
      features: ['전환율 최적화', '빠른 로딩 속도', 'A/B 테스트 지원', '분석 도구 연동'],
             color: 'bg-garden-indigo-500',
       shadowColor: 'shadow-garden-indigo'
    },
    {
      icon: Building,
      title: '기업/개인 사이트',
      description: '브랜드의 정체성을 반영한 전문적인 웹사이트를 구축합니다. 기업의 가치와 개인의 개성을 효과적으로 표현하여 신뢰도를 높이고 온라인 입지를 강화해드립니다.',
      features: ['브랜드 아이덴티티', '콘텐츠 관리 시스템', '다국어 지원', '소셜 미디어 연동'],
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      shadowColor: 'shadow-lg'
    },
    {
      icon: RefreshCw,
      title: '기존 웹 리뉴얼',
      description: '오래된 웹사이트를 최신 트렌드에 맞게 새롭게 탈바꿈시켜드립니다. 사용자 경험 개선과 성능 최적화를 통해 더 나은 결과를 만들어보세요.',
      features: ['성능 최적화', 'UI/UX 개선', '모바일 최적화', '보안 강화'],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      shadowColor: 'shadow-lg'
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Garden Studio <span className="text-garden-green-500">서비스</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 분야의 웹 제작 서비스를 통해 당신의 비즈니스를 온라인에서 성공으로 이끌어드립니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
                              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-garden-green-500/20 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-2xl mb-6 ${service.shadowColor}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-garden-green-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-garden-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center space-x-2 text-garden-green-500 hover:text-garden-green-600 font-medium transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
                  >
                    <span>자세히 알아보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-garden-gradient rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              어떤 서비스가 필요하신가요?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              아직 어떤 서비스가 적합한지 확실하지 않으시다면, 언제든 상담을 통해 최적의 솔루션을 찾아드리겠습니다.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-garden-green-500 text-white rounded-full hover:bg-garden-green-600 transition-all duration-300 font-medium shadow-garden hover:shadow-lg transform hover:scale-105"
            >
              무료 상담 받기 🌿
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 