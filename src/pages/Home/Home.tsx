import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import style from './Home.module.scss';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import SwapiList from '../../components/SwapiList/SwapiList';
import Pagination from '../../components/Pagination/Pagination';
import { CurrentPageContext } from '../../store/context';
import { getSwapiPeople } from '../../services/DataManager';
import useLocalStorage from '../../hooks/useLocalStorage';

function Home() {
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [list, setList] = useLocalStorage<ISwapiPeople[]>([], 'list');
  const [count, setCount] = useLocalStorage<number | null>(null, 'count');
  const [pages, setPages] = useLocalStorage<number[]>([], 'pages');
  const [currentPage, setCurrentPage] = useLocalStorage(0, 'currentPage');
  const limit = 10;
  const { id } = useParams();

  const memoCurrentPageContext = useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage, setCurrentPage]
  );

  const getPeople = useCallback(
    async (localStorageData = '', currPage = currentPage + 1) => {
      if (!id) {
        setLoader(true);
        const resonseList = await getSwapiPeople(localStorageData, currPage);
        setLoader(false);
        setList(resonseList.results);
        setCount(resonseList.count);
        setPages([...Array(Math.ceil(resonseList.count / limit)).keys()]);
      }
    },
    [list, currentPage]
  );

  useEffect(() => {
    const searchValueLocalStorage = localStorage.getItem('search');
    if (searchValueLocalStorage) {
      getPeople(JSON.parse(searchValueLocalStorage));
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
        <div className={style.list}>
          <DefaultButton
            handleClick={handleError}
            text="Test Error"
            className="button"
          />
          {loader && <div className={style.loader}>Loading...</div>}
          {list.length === 0 && count === 0 && (
            <div style={{ marginTop: 20 }}>No results</div>
          )}
          <SwapiList list={list} />
        </div>
        <div>
          <CurrentPageContext.Provider value={memoCurrentPageContext}>
            <Pagination pages={pages} currentPage={currentPage} />
          </CurrentPageContext.Provider>
        </div>
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
