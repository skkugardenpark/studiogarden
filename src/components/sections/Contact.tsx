'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageCircle, Instagram, Send, CheckCircle, Clock, Leaf } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: '카카오 오픈채팅',
      description: '실시간 채팅으로 빠른 상담',
      action: '채팅하기',
      color: 'bg-yellow-500',
      link: 'https://open.kakao.com/o/sRAXq0Bh'
    },
    {
      icon: Instagram,
      title: '인스타그램 DM',
      description: '포트폴리오 확인 후 문의',
      action: 'DM 보내기',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      link: 'https://www.instagram.com/gardenstudio.web/'
    },
    {
      icon: Mail,
      title: '이메일 문의',
      description: 'garden9276@naver.com',
      action: '메일 보내기',
      color: 'bg-garden-green',
      link: 'mailto:garden9276@naver.com'
    }
  ];

  const faqs = [
    {
      question: '웹사이트 제작 기간은 얼마나 걸리나요?',
      answer: '프로젝트의 규모와 복잡도에 따라 2-4주 정도 소요됩니다. 상세 일정은 초기 상담 시 안내해드립니다.'
    },
    {
      question: '유지보수는 어떻게 진행되나요?',
      answer: '납품 후 1개월은 기본 유지보수가 포함됩니다. 이후에는 건별 또는 월 플랜으로 유연하게 대응해드립니다.'
    },
    {
      question: '모바일 대응이 가능한가요?',
      answer: '모든 웹사이트는 반응형으로 제작되어 모바일, 태블릿 등 다양한 디바이스에서 최적화된 경험을 제공합니다.'
    },
    {
      question: '도메인과 호스팅은 어떻게 하나요?',
      answer: '도메인 구매와 호스팅 설정을 모두 도와드립니다. 고객이 원하는 경우 직접 구매하신 도메인과 호스팅도 사용 가능합니다.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            <span className="gradient-text">프로젝트</span> 문의하기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Garden Studio는 고객의 비즈니스 성공을 위한 최적의 웹 솔루션을 제공합니다.
            아래 채널들을 통해 편하게 문의해주세요.
          </p>
          
          {/* Response Time Badge */}
          <div className="inline-flex items-center space-x-2 bg-garden-green/10 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-garden-green" />
            <span className="text-sm font-medium text-garden-green">평균 응답 시간: 2시간 이내</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-garden-green" />
              <span>프로젝트 상담 신청</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-garden-green/20 focus:border-garden-green transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-garden-green/20 focus:border-garden-green transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  프로젝트 유형 *
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-garden-green/20 focus:border-garden-green transition-colors"
                >
                  <option value="">선택해주세요</option>
                  <option value="쇼핑몰">쇼핑몰</option>
                  <option value="랜딩페이지">랜딩페이지</option>
                  <option value="기업사이트">기업/개인 사이트</option>
                  <option value="리뉴얼">기존 웹 리뉴얼</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  프로젝트 상세 내용 *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-garden-green/20 focus:border-garden-green transition-colors resize-none"
                  placeholder="프로젝트에 대해 자세히 알려주세요."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-garden-green text-white py-3 rounded-xl hover:bg-garden-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>상담 신청하기</span>
              </button>

              {isSubmitted && (
                <div className="flex items-center justify-center space-x-2 text-garden-green">
                  <CheckCircle className="w-5 h-5" />
                  <span>상담 신청이 완료되었습니다.</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Quick Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-garden-green" />
              <span>빠른 문의 방법</span>
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-gray-100 hover:border-garden-green/20 transition-colors group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${method.color} text-white`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-garden-green transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                    </div>
                    <span className="text-sm text-garden-green font-medium">{method.action}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-garden-green" />
              <span>Garden Studio를 선택하는 이유</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">맞춤형 디자인</h4>
                <p className="text-sm text-gray-600">브랜드의 아이덴티티를 살린 독창적인 디자인을 제공합니다.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">최신 기술 스택</h4>
                <p className="text-sm text-gray-600">Next.js, React 등 최신 기술로 최적화된 웹사이트를 구현합니다.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">신속한 유지보수</h4>
                <p className="text-sm text-gray-600">납품 후 1개월 무상 유지보수, 이후 유연한 관리 플랜을 제공합니다.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">합리적인 가격</h4>
                <p className="text-sm text-gray-600">고품질의 결과물을 합리적인 가격으로 제공합니다.</p>
              </div>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-garden-green" />
              <span>자주 묻는 질문</span>
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: customEase }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            지금 바로 <span className="gradient-text">시작</span>하세요
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Garden Studio와 함께 성공적인 웹사이트를 만들어보세요.
            첫 상담은 무료입니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://open.kakao.com/o/sRAXq0Bh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bounce px-8 py-4 bg-garden-green-500 text-white rounded-full hover:bg-garden-green-600 transition-all duration-300 font-medium shadow-garden hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <span>카카오톡으로 상담하기</span>
              <span className="animate-pulse-soft">💬</span>
            </a>
            <a
              href="mailto:garden9276@naver.com"
              className="btn-bounce px-8 py-4 glass-effect text-gray-700 rounded-full hover:bg-white/90 transition-all duration-300 font-medium hover:border-garden-green-500/30 flex items-center space-x-2"
            >
              <span>이메일로 문의하기</span>
              <span className="animate-float">✉️</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 