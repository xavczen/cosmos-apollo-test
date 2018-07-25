import toJson from 'enzyme-to-json';
import createTestContext from 'react-cosmos-test/enzyme';

import fixture from './SubmitForm.fixture';

const { mount, getWrapper, set } = createTestContext({ fixture });

describe('SubmitForm', () => {
  beforeEach(mount);

  it('renders correctly', () => {
    expect(toJson(getWrapper())).toMatchSnapshot();
  });

  it('should trigger mutation when submit button clicked', () => {
    const button = getWrapper('button');
    button.simulate('click');
    expect(toJson(getWrapper())).toMatchSnapshot();

    // TODO
  });
});
