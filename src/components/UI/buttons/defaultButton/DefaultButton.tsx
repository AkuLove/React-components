import { IButtonProps } from '../../../../types/interfaces/IButtonProps';
import style from './DefaultButton.module.scss';

function DefaultButton(props: IButtonProps) {
  const { handleClick, text, className } = props;
  return (
    <button className={style[className]} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default DefaultButton;
