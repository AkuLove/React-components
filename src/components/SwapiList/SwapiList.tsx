import { memo } from 'react';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';
import SwapiItem from '../SwapiItem/SwapiItem';
import style from './SwapiList.module.scss';

const SwapiList = memo(({ list }: { list: ISwapiPeople[] }) => {
  return (
    <ul className={style.list}>
      {list.map((item) => (
        <SwapiItem key={item.url} people={item} />
      ))}
    </ul>
  );
});

export default SwapiList;
