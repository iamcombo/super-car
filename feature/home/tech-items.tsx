/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

type Props = {
  text: ReactNode;
  icon: any;
};

export const TechItem = ({ text, icon: Icon }: Props) => {
  return (
    <li className="flex items-center space-x-2">
      <Icon width={24} height={24} fill="#FFF" />
      <span>{text}</span>
    </li>
  );
};

export const TechItemReverse = ({ text, icon: Icon }: Props) => {
  return (
    <li className="flex items-center justify-end space-x-2 text-right">
      <span>{text}</span>
      <Icon width={24} height={24} fill="#FFF" />
    </li>
  );
};
