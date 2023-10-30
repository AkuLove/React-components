import { GiDeathStar } from 'react-icons/gi';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import style from './SwapiItem.module.scss';

function SwapiItem({ people }: { people: ISwapiPeople }) {
  return (
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
  );
}

export default SwapiItem;
