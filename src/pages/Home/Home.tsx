import { Component } from 'react';
import style from './Home.module.scss';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import DataManager from '../../services/DataManager';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import SwapiList from '../../components/SwapiList/SwapiList';

interface IProps {
  // children: React.ReactNode;
}

class Home extends Component<
  IProps,
  { error: null | boolean; list: ISwapiPeople[]; count: null | number }
> {
  dataManager = new DataManager();

  constructor(props: IProps) {
    super(props);
    this.state = { error: null, list: [], count: null };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      this.getPeople(searchValueLocalStorage);
    } else {
      this.getPeople();
    }
  }

  handleGetPeople = async () => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      this.getPeople(searchValueLocalStorage);
    } else {
      this.getPeople();
    }
  };

  handleClick() {
    this.setState({ error: true });
  }

  getPeople = async (localStorageData = '') => {
    this.setState({ list: [] });
    this.setState({ count: null });
    const list = await this.dataManager.getSwapiPeople(localStorageData);
    this.setState({ list: list.results });
    this.setState({ count: list.count });
  };

  render() {
    const { error, list, count } = this.state;

    if (error) {
      throw new Error('Test Erorr');
    }
    if (list.length === 0 && count === null) {
      return <div>Loading...</div>;
    }
    if (list.length === 0 && count === 0) {
      return <div>No results</div>;
    }

    return (
      <section className={style.homePage}>
        <div className={style.homeBody}>
          <DefaultButton
            handleClick={this.handleClick}
            text="Test Error"
            className="button"
          />
          <SwapiList list={list} />
        </div>
        <div className={style.searchButton}>
          <DefaultButton
            handleClick={this.handleGetPeople}
            text="Search"
            className="button"
          />
        </div>
      </section>
    );
  }
}

export default Home;
