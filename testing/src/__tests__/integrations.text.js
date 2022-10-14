
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import Root from 'Root';
import App from 'components/App';
import fetchMock from "jest-fetch-mock";
//import moxios from 'moxios';
fetchMock.enableMocks();

configure({adapter: new Adapter()});
beforeEach(() => {
    fetch.resetMocks();
    //moxios.install();
    //moxios.stubRequest('http://jsonplaceholder.typicode.com/comments');
  });

 it('can fetch a list of comments and display them', (done) => {

    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    fetch.mockResponseOnce(JSON.stringify(
        
            [
                {
                  "postId": 1,
                  "id": 1,
                  "name": "id labore ex et quam laborum",
                  "email": "Eliseo@gardner.biz",
                  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                  "postId": 1,
                  "id": 2,
                  "name": "quo vero reiciendis velit similique earum",
                  "email": "Jayne_Kuhic@sydney.com",
                  "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                }
            ]
        
        ))

    wrapped.find(".fetch-comments-btn").simulate('click');
            
    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    }, 100); // needs timeout for the mock fetch to kick in


});



