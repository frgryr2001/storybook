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
   * @default #ffffff
   *
   */
  backgroundColor?: string;

  /**
   * Should the label be all caps?
   * @default false
   */
  allCaps: boolean;

  /**
   * What text color to use?
   * @default primary
   */
  color: 'primary' | 'secondary' | 'tertiary';

  /**
   * What font color to use?
   * @default #000000
   *
   */
  fontColor?: string;
}

const MyLabel: FC<MyLabelProps> = ({
  label = 'My label',
  size = 'normal',
  backgroundColor = '#ffffff',
  color = 'primary',
  allCaps = false,
  fontColor,
}) => {
  return (
    <span
      className={`${size} bg-violet-500 text-${color}`}
      style={{ backgroundColor, color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
