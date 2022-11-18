import * as s from "./Tabs.styled";

const Tab = ({
  activeTab,
  label,
  onClick,
}: {
  activeTab: string;
  label: string;
  onClick: (tab: string) => void;
}) => {
  const onTabClick = () => {
    onClick(label);
  };

  return (
    <s.Tab active={activeTab === label} onClick={onTabClick}>
      {label}
    </s.Tab>
  );
};

export default Tab;
