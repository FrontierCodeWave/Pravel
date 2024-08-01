import type { Metadata } from 'next';
import localFont from 'next/font/local';

import ReactQueryProviders from '../provider/ReactQueryProviders';
import StoreProvider from '../provider/StoreProvider';

import '../styles/global.css';
import '../styles/icons.css';
import '../styles/swiper.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: "P'ravel",
  description: "'P'(Mbti) 성향의 즉흥적인 여행자들을 위한 여행 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <div className="relative max-w-[780px] min-w-[390px] margin_center">
          <ReactQueryProviders>
            <StoreProvider>{children}</StoreProvider>
          </ReactQueryProviders>
        </div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
