import React from "react";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Tab from "./Tab";
import * as s from "./Tabs.styled";

interface TabsProps {
  setShowModal: (v: boolean) => void;
  onTabClick: (tab: string) => void;
  children: any;
  width: number;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  setShowModal,
  onTabClick,
  width,
}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab: string) => {
    if (width <= 320) setShowModal(true);
    else {
      onTabClick(tab);
      setActiveTab(tab);
    }
  };

  return (
    <s.TabsWrapper>
      <s.Tabs>
        {React.Children.map(children, (child: any) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </s.Tabs>
      <s.Content>
        {children.map((child: { props: { label: any } }) => {
          if (child.props.label !== activeTab) return undefined;
          return child;
        })}
      </s.Content>
    </s.TabsWrapper>
  );
};
export default Tabs;
