'use client';

import { motion, Variants, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
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

  const projects = [
    {
      title: 'Engage Academy',
      category: '교육 플랫폼',
      description: '영어 전문 교육원의 현대적이고 체계적인 웹사이트. 맞춤형 커리큘럼과 전문 강사진을 소개하는 완성도 높은 교육 플랫폼',
      image: '/portfolio/academy.png',
      tags: ['교육', '반응형', '현대적 디자인', 'Next.js'],
      url: 'https://academy-phi-two.vercel.app/'
    },
    {
      title: 'MONODESK',
      category: '데스크테리어 브랜드',
      description: '당신의 공간에 특별함을 더하는 감성 데스크테리어 브랜드. 자연의 온기와 감성을 담은 프리미엄 소품들로 개성 있는 공간을 만들어보세요.',
      image: '/portfolio/monodesk.png',
      tags: ['브랜딩', '이커머스', '프리미엄', '감성디자인'],
      url: 'https://monodesk.vercel.app/'
    },
    {
      title: 'Haven Stay',
      category: '숙박 예약 사이트',
      description: '자연 속 평온한 공간, Haven Stay. 미니멀하고 고급스러운 디자인으로 진정한 휴식을 제공하는 숙박 예약 플랫폼',
      image: '/portfolio/heaven.png',
      tags: ['숙박', '예약시스템', '프리미엄', '반응형'],
      url: 'https://stayhv.vercel.app/'
    },
    {
      title: '디지털 마케팅 에이전시',
      category: '기업 사이트',
      description: '혁신적인 디자인의 마케팅 회사 웹사이트',
      image: '/portfolio/agency.jpg',
      tags: ['모던 디자인', '포트폴리오', '애니메이션'],
      url: '#'
    }
  ];

  const handleProjectClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            포트폴리오 <span className="gradient-text">갤러리</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 분야의 프로젝트를 통해 쌓아온 경험과 노하우를 확인해보세요. 
            각 프로젝트마다 고유한 브랜드 가치를 웹에서 구현했습니다.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="bg-white rounded-2xl overflow-hidden hover-card">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.url !== '#' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="w-4 h-4 text-garden-green-500" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-garden-green-500 font-medium">{project.category}</span>
                    <ArrowRight className="w-5 h-5 text-garden-green-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-garden-green-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-garden-green-50 text-garden-green-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gray-50 hover:bg-garden-green-500 hover:text-white text-gray-700 rounded-xl font-medium transition-all duration-300 group-hover:bg-garden-green-500 group-hover:text-white flex items-center justify-center space-x-2">
                    <span>{project.url !== '#' ? '사이트 방문하기' : '자세히 보기'}</span>
                    {project.url !== '#' && <ExternalLink className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 hover-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">완료된 프로젝트</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-sm text-gray-600">만족한 고객</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600">프로젝트 성공률</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">24H</div>
                <div className="text-sm text-gray-600">평균 응답 시간</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: customEase }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            당신의 프로젝트도 여기에 <span className="gradient-text">추가</span>해보세요
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Garden Studio와 함께 만든 웹사이트가 다음 포트폴리오의 주인공이 될 수 있습니다.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-bounce px-8 py-4 bg-garden-green-500 text-white rounded-full hover:bg-garden-green-600 transition-all duration-300 font-medium shadow-garden hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>프로젝트 시작하기</span>
            <span className="animate-pulse-soft">🚀</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 