import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Props = {
  text: ReactNode;
  icon: IconType;
};

export const TechItem = ({ text, icon }: Props) => {
  return (
    <li className="flex items-center space-x-2">
      <span>{icon({ className: 'h-6 w-6' })}</span>
      <span>{text}</span>
    </li>
  );
};

export const TechItemReverse = ({ text, icon }: Props) => {
  return (
    <li className="flex items-center justify-end space-x-2 text-right">
      <span>{text}</span>
      <span>{icon({ className: 'h-6 w-6' })}</span>
    </li>
  );
};
