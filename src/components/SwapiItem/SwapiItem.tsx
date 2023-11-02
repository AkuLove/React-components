import { GiDeathStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import style from './SwapiItem.module.scss';

function SwapiItem({ people }: { people: ISwapiPeople }) {
  return (
    <Link to={`/${people.url.replace(/\D/g, '')}`}>
      <div className={style.item}>
        <div className={style.avatar}>
          <GiDeathStar />
        </div>
        <div className={style.body}>
          <p className={style.name}>{people.name}</p>
          <p>
            <span>Height: </span>
            {people.height}sm
          </p>
          <p>
            <span>Mass: </span>
            {people.mass}kg
          </p>
          <p>
            <span>Gender: </span>
            {people.gender}
          </p>
          <p>
            <span>Hair color: </span>
            {people.hair_color}
          </p>
          <p>
            <span>Skin color: </span>
            {people.skin_color}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SwapiItem;
