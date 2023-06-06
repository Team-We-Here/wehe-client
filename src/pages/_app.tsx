import type { AppProps } from 'next/app';

import { antdConfig } from '@/src/constants/antd';

import Header from '@/src/components/Layout/Header/Header';

import { GlobalStyle } from '@/src/styles/global-style';

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
