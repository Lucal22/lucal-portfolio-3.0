import { renderTheme } from '../../utils/renderTheme';
import Content from './index';

describe('<Content />', () => {
  it('should render', () => {
    const content = renderTheme(
      <Content title={''} content={''} url={''} alt={''} />,
    );
    expect(content).toMatchSnapshot;
  });
});
