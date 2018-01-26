
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    configure({ adapter: new Adapter() });

    const app = shallow(<App />);

    it('rednders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('intializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
});
describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
        app.find('.btn-add').simulate('click');
    });
    it('adds a new gift to `state`', () => {
        app.find('.btn-add').simulate('click');

        expect(app.state().gifts).toEqual([{ id: 1, name: '' }]);
    });

    it('adds a new gift to the rendered list', () => {

        app.find('.btn-add').simulate('click');

        expect(app.find('.gift-list').children().length).toEqual(1);
    });
});
