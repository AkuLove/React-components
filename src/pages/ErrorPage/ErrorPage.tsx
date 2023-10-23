import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import style from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={style.errorBody}>
      <div>Something went wrong</div>
      <DefaultButton
        text="Try again"
        handleClick={() => window.location.reload()}
        className="button"
      />
    </div>
  );
}

export default ErrorPage;
