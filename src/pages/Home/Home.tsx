import { useEffect, useState } from 'react';
import style from './Home.module.scss';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import DataManager from '../../services/DataManager';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import SwapiList from '../../components/SwapiList/SwapiList';

function Home() {
  const dataManager = new DataManager();
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<ISwapiPeople[]>([]);
  const [count, setCount] = useState<number | null>(null);

  const getPeople = async (localStorageData = '') => {
    setList([]);
    setCount(null);
    const resonseList = await dataManager.getSwapiPeople(localStorageData);
    setList(resonseList.results);
    setCount(resonseList.count);
  };

  useEffect(() => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      getPeople(JSON.parse(searchValueLocalStorage));
    } else {
      getPeople();
    }
  }, []);

  useEffect(() => {
    if (error) {
      throw new Error('Test Erorr');
    }
  }, [error]);

  const handleGetPeople = async () => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      getPeople(JSON.parse(searchValueLocalStorage));
    } else {
      getPeople();
    }
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <section className={style.homePage}>
      <div className={style.homeBody}>
        <DefaultButton
          handleClick={handleError}
          text="Test Error"
          className="button"
        />
        {list.length === 0 && count === null && <div>Loading...</div>}
        {list.length === 0 && count === 0 && <div>No results</div>}
        <SwapiList list={list} />
      </div>
      <div className={style.searchButton}>
        <DefaultButton
          handleClick={handleGetPeople}
          text="Search"
          className="button"
        />
      </div>
    </section>
  );
}

export default Home;
