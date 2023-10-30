import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import RSlogo from '../../assets/rs_school_js.svg';

function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.media}>
          <Link to="https://github.com/AkuLove" className={style.logo}>
            <AiFillGithub />
            <p>AkuLove</p>
          </Link>
          <div>2023</div>
          <Link to="https://rs.school" className={style.logors}>
            <img src={RSlogo} alt="RsSchool logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
