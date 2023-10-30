import { IInputProps } from '../../../types/interfaces/IInputProps';
import style from './DefaultInput.module.scss';

function DefaultInput(props: IInputProps) {
  const { value, onChange, name, placeholder, className } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      className={style[className]}
    />
  );
}

export default DefaultInput;
