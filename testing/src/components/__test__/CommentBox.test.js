import React from "react";
import CommentBox from "components/CommentBox";
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  Root  from "Root";

configure({adapter: new Adapter()});

let wrapped;
beforeEach(() => wrapped = mount(
    <Root>
        <CommentBox/>
    </Root>
));
afterEach(() => wrapped.unmount());

it('has a test area and a button', () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update(); // events(setState) doesnt kick in instantanous
    });

    it('has a test area that users can type in', () => {
        expect(wrapped.find("textarea").prop('value')).toEqual('new comment');
    });

    it('when form submitted, textarea gets emptied', () => {
        expect(wrapped.find("textarea").prop('value')).toEqual('new comment');
        wrapped.find("form").simulate('submit');
        wrapped.update();
        expect(wrapped.find("textarea").prop('value')).toEqual('');

    });
});