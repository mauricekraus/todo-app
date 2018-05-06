import React from 'react';
import { shallow } from 'enzyme';
import CheckItem from './CheckItem';

it('renders without crashing', () => {
  shallow(<CheckItem title="Hallo" completed onEdit={() => {}} onDelete={() => {}} onCheck={() => {}} />);
});
