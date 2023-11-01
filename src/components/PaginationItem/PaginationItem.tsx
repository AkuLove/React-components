import { useContext } from 'react';
import DefaultButton from '../UI/buttons/defaultButton/DefaultButton';
import style from './PaginationItem.module.scss';
import { CurrentPageContext } from '../../store/context';

function PaginationItem({
  className,
  page,
}: {
  className: string;
  page: number;
}) {
  const { setCurrentPage } = useContext(CurrentPageContext)!;

  const handleChangeCurrentPage = (pageNumber: number) => {
    if (setCurrentPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <li className={style[className]}>
      <DefaultButton
        text={`${page + 1}`}
        handleClick={() => handleChangeCurrentPage(page)}
        className={className === 'active' ? 'active' : 'button'}
      />
    </li>
  );
}
export default PaginationItem;
