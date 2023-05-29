import { FC } from 'react';
import './MyLabel.css';

export interface MyLabelProps {
  /**
   * Label text
   */
  label: string;
  /**
   * How large should the label be?
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * What background color to use?
   * @default #ff0000
   *
   */
  backgroundColor?: string;
  /**
   * What text color to use?
   * @default #ffffff
   */
  color?: string;
}

const MyLabel: FC<MyLabelProps> = ({
  label = 'No label',
  size = 'normal',
  backgroundColor,
  color,
}) => {
  return (
    <span className={`${size}`} style={{ backgroundColor, color }}>
      {label}
    </span>
  );
};

export default MyLabel;
