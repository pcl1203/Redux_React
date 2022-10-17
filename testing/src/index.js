import React from "react";
import App from 'components/App'
import ReactDOM from "react-dom";
import Root from 'Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);
