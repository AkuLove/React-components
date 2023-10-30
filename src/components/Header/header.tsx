import DefaultInput from '../UI/inputs/DefaultInput';
import style from './Header.module.scss';
import DefaultButton from '../UI/buttons/defaultButton/DefaultButton';
import useLocalStorage from '../../hooks/useLocalStorage';

function Header() {
  const [searchValue, setSearchValue] = useLocalStorage('', 'search');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <DefaultInput
          name="searh"
          value={searchValue}
          onChange={(e) => {
            handleChange(e);
          }}
          className="input"
          placeholder="Find you'r Star Wars hero | for example type - 'Luke Skywalker'"
        />
        <DefaultButton
          className="button"
          text="Search"
          handleClick={() => '1'}
        />
      </div>
    </header>
  );
}

export default Header;
