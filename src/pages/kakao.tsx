import { NextPage } from 'next';
import { useEffect } from 'react';

const KaKao: NextPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    window.opener.postMessage(code, 'http://localhost:3000');
  }, []);

  return <></>;
};

export default KaKao;
