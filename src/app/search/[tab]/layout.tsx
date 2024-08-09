import React from 'react';

interface Props {
  tabList: React.ReactNode;
  tabContent: React.ReactNode;
}

const SearchPage = ({ tabList, tabContent }: Props) => {
  return (
    <>
      {tabList}
      {tabContent}
    </>
  );
};

export default SearchPage;
