import type { AppProps } from 'next/app';

import { antdConfig } from '@/constants/antd';

import Header from '@/components/Layout/Header/Header';

import { GlobalStyle } from '@/styles/global-style';

import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={antdConfig}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
