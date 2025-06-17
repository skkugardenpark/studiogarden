import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garden Studio - 감각적인 브랜드를 위한 감성형 홈페이지 제작",
  description: "Garden Studio는 당신의 브랜드가 가진 고유한 이야기를 웹에서 아름답게 표현합니다. 심플하면서도 감성적인 디자인으로 사용자의 마음을 사로잡는 웹사이트를 만들어보세요.",
  keywords: "웹사이트 제작, 홈페이지 제작, 쇼핑몰 제작, 랜딩페이지, 웹 디자인, 프리랜서 개발자, 반응형 웹사이트",
  authors: [{ name: "Garden Studio" }],
  creator: "Garden Studio",
  publisher: "Garden Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gardenstudio.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Garden Studio - 감성형 홈페이지 제작",
    description: "감각적인 브랜드를 위한 감성형 홈페이지 제작 서비스. 쇼핑몰, 랜딩페이지, 기업사이트 제작 전문",
    url: 'https://gardenstudio.co.kr',
    siteName: 'Garden Studio',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garden Studio - 감성형 홈페이지 제작',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Garden Studio - 감성형 홈페이지 제작",
    description: "감각적인 브랜드를 위한 감성형 홈페이지 제작 서비스",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
