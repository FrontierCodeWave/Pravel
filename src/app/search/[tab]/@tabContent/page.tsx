import SearchResultList from '@/components/search/list/SearchResultList';
import styled from '@/components/search/search.module.css';
import TabContentWrap from '@/components/tab/TabContentWrap';
import CATEGORY from '@/lib/const/search';

interface Props {
  params: {
    tab: string;
  };
}

const SearchTabContent = ({ params }: Props) => {
  return (
    <>
      {CATEGORY.map((item) => (
        <TabContentWrap
          key={`panel_${item.en}`}
          id={`panel_${item.en}`}
          className={`px-[16px] ${params.tab === item.en ? styled.cont_panel_on : styled.cont_panel}`}
        >
          <SearchResultList />
        </TabContentWrap>
      ))}
    </>
  );
};

export default SearchTabContent;
