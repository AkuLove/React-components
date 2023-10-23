import { Component } from 'react';
import DefaultInput from '../UI/inputs/defaultInput';
import style from './header.module.scss';
import DefaultButton from '../UI/buttons/defaultButton/DefaultButton';

class Header extends Component<object, { searchValue: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchValue: e.target.value,
    });
    localStorage.setItem('search', e.target.value);
  }

  render() {
    const { searchValue } = this.state;
    const searchValueLocalStorage = localStorage.getItem('search');
    return (
      <header className={style.header}>
        <div className={style.container}>
          <DefaultInput
            name="searh"
            value={searchValueLocalStorage || searchValue}
            onChange={(e) => {
              this.handleChange(e);
            }}
            className="input"
            placeholder="Find you'r pokemon | for example type - 'pikachu'"
          />
          <DefaultButton
            className="button"
            text="Search"
            handleClick={() => console.log(this.state.searchValue)}
          />
        </div>
      </header>
    );
  }
}

export default Header;
