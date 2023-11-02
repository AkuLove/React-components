import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { getSwapiPeopleById } from '../../services/DataManager';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';

import style from './SwapiItemPage.module.scss';

function SwapiItemPage() {
  const { id } = useParams();
  const [people, setPeople] = useState<ISwapiPeople | null>(null);

  const getPeople = async (peopleId = id) => {
    setPeople(null);
    const response = await getSwapiPeopleById(peopleId);
    setPeople(response);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className={style.item}>
      <div className={style.itemBody}>
        <button
          aria-label="button"
          type="button"
          className={style.closeItem}
          onClick={() => navigate(-1)}
        />
        <div className={style.itemContent}>
          {!people && <div>Loading...</div>}
          {people && (
            <>
              <button type="button" onClick={() => navigate(-1)}>
                <ImCross />
              </button>
              <p className={style.name}>{people.name}</p>
              <p>
                <span>Birth year: </span>
                {people.birth_year}
              </p>
              <p>
                <span>Height: </span>
                {people.height}
              </p>
              <p>
                <span>Mass: </span>
                {people.mass}
              </p>
              <p>
                <span>Skin color: </span>
                {people.skin_color}
              </p>
              <p>
                <span>Hair color: </span>
                {people.hair_color}
              </p>
              <p>
                <span>Eye color: </span>
                {people.eye_color}
              </p>
              <p>
                <span>Homeworld: </span>
                {people.homeworld}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SwapiItemPage;
