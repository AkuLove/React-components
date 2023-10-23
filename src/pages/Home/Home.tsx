import { Component } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import style from './Home.module.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';
import DataManager from '../../services/DataManager';
import { ISwapiPeople } from '../../types/interfaces/ISwapiPeople';

interface IProps {
  // children: React.ReactNode;
}

class Home extends Component<
  IProps,
  { error: null | boolean; list: ISwapiPeople[] }
> {
  dataManager = new DataManager();

  constructor(props: IProps) {
    super(props);
    this.state = { error: null, list: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const list = await this.dataManager.getSwapiPeople();
    this.setState({ list });
  }

  handleClick() {
    this.setState({ error: true });
  }

  render() {
    const { error, list } = this.state;
    if (error) {
      throw new Error('Test Erorr');
    }
    if (list.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <section className={style.homePage}>
        <div className={style.homeBody}>
          <DefaultButton
            handleClick={this.handleClick}
            text="Test Error"
            className="button"
          />
          <ul>
            {list.map((people) => (
              <li key={people.url}>{people.name}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

const WrappedHome = withErrorBoundary(Home, {
  FallbackComponent: ErrorPage,
});

export default WrappedHome;
