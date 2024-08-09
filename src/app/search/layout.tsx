import React from 'react';

import HeaderDetail from '@/layout/header/HeaderDetail';
import ModalWrapper from '@/layout/wrapper/ModalWrapper';

const DetailLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ModalWrapper>
      <HeaderDetail moveTo="/search" />
      {children}
    </ModalWrapper>
  );
};

export default DetailLayout;
