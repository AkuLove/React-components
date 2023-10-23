import { Component } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import style from './Home.module.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import DefaultButton from '../../components/UI/buttons/defaultButton/DefaultButton';

interface IProps {
  // children: React.ReactNode;
}

class Home extends Component<IProps, { error: null | boolean }> {
  constructor(props: IProps) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    if (error) {
      throw new Error('Test Erorr');
    }
    return (
      <section className={style.homePage}>
        <div className={style.homeBody}>
          <DefaultButton
            handleClick={this.handleClick}
            text="Test Error"
            className="button"
          />
        </div>
      </section>
    );
  }
}

const WrappedHome = withErrorBoundary(Home, {
  FallbackComponent: ErrorPage,
});

export default WrappedHome;
