import { renderTheme } from '../../utils/renderTheme';
import Footer from './index';

describe('<Footer />', () => {
  it('should render', () => {
    const footer = renderTheme(<Footer />);
    expect(footer).toMatchSnapshot;
  });
});
