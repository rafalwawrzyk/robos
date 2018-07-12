import { shallow } from "enzyme";
import React from 'react';
import * as actions from './actions';




describe('actions test', () => {
    it('search field action',() => {
        const text = 'Working';
        expect(actions.setSearchFieldAction(text)).toEqual({
            type:'SET_SEARCH_FIELD',
            payload: text
        })
    })
})