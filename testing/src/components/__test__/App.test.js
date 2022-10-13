import React from "react";
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import App from 'components/App'

configure({adapter: new Adapter()});

let wrapped;

beforeEach(() => {
   wrapped = shallow(<App/>);
});

it('shows a comment box', () => {
expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
   expect(wrapped.find(CommentList).length).toEqual(1);
});