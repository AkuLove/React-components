import PaginationItem from '../PaginationItem/PaginationItem';
import style from './Pagination.module.scss';

function Pagination(props: { pages: number[]; currentPage: number }) {
  const { pages, currentPage } = props;

  return (
    <ul className={style.pagination}>
      {pages.map((page) => (
        <PaginationItem
          key={`page${page}`}
          className={currentPage === page ? 'active' : 'item'}
          page={page}
        />
      ))}
    </ul>
  );
}

export default Pagination;
