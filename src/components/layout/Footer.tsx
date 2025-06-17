'use client';

import { motion } from 'framer-motion';
import { Leaf, Mail, MessageCircle, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-garden-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-garden-indigo rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-garden-green rounded-full">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Garden Studio</h3>
                  <p className="text-gray-400 text-sm">감성형 홈페이지 제작</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Garden Studio는 브랜드의 고유한 이야기를 웹에서 아름답게 표현하는 
                프리랜서 웹 개발자입니다. 감성적이고 현대적인 디자인으로 
                당신의 비즈니스를 온라인에서 성공으로 이끌어드립니다.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-garden-green rounded-full transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">빠른 링크</h4>
              <ul className="space-y-3">
                {[
                  { name: '서비스', id: 'services' },
                  { name: '포트폴리오', id: 'portfolio' },
                  { name: '제작과정', id: 'process' },
                  { name: '문의하기', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-garden-green transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">연락처</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-garden-green font-medium mb-1">이메일</h5>
                  <p className="text-gray-300 text-sm">garden9276@naver.com</p>
                </div>
                <div>
                  <h5 className="text-garden-green font-medium mb-1">응답 시간</h5>
                  <p className="text-gray-300 text-sm">평균 2시간 이내</p>
                </div>
                <div>
                  <h5 className="text-garden-green font-medium mb-1">상담 가능 시간</h5>
                  <p className="text-gray-300 text-sm">평일 09:00 - 18:00</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <h4 className="text-lg font-semibold mb-6 text-center">제공 서비스</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                '쇼핑몰 구축',
                '랜딩페이지',
                '기업/개인 사이트',
                '웹사이트 리뉴얼'
              ].map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Garden Studio. All rights reserved.</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>in Korea</span>
                </span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-garden-green transition-colors duration-300 group"
              >
                <span className="text-sm">위로 가기</span>
                <ArrowUp className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-garden-green hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer; 