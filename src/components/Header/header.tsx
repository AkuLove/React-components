import style from './header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <input type="text" />
      </div>
    </header>
  );
}

export default Header;
