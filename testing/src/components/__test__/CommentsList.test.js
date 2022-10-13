import React from "react";
import CommentList from "components/CommentList";
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  Root  from "Root";

configure({adapter: new Adapter()});

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
   
    <Root initialState={initialState}>
        <CommentList/>
    </Root>
    );
    
});

afterEach(() => wrapped.unmount());

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('show the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');

});