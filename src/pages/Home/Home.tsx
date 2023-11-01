import { useEffect, useMemo, useState } from 'react';
import style from './Home.module.scss';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import DataManager from '../../services/DataManager';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import SwapiList from '../../components/SwapiList/SwapiList';
import Pagination from '../../components/Pagination/Pagination';
import { CurrentPageContext } from '../../store/context';

function Home() {
  const dataManager = new DataManager();
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<ISwapiPeople[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  const memoCurrentPageContext = useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage, setCurrentPage]
  );

  const getPeople = async (
    localStorageData = '',
    currPage = currentPage + 1
  ) => {
    setList([]);
    setCount(null);
    const resonseList = await dataManager.getSwapiPeople(
      localStorageData,
      currPage
    );
    setList(resonseList.results);
    setCount(resonseList.count);
    setPages([...Array(Math.ceil(resonseList.count / limit)).keys()]);
  };

  useEffect(() => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      getPeople(JSON.parse(searchValueLocalStorage));
    } else {
      getPeople();
    }
  }, [currentPage]);

  useEffect(() => {
    if (error) {
      throw new Error('Test Erorr');
    }
  }, [error]);

  const handleGetPeople = async () => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      setCurrentPage(0);
      getPeople(JSON.parse(searchValueLocalStorage), 1);
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
        <CurrentPageContext.Provider value={memoCurrentPageContext}>
          <Pagination pages={pages} currentPage={currentPage} />
        </CurrentPageContext.Provider>
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
