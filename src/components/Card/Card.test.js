import {shallow, mount, render} from 'enzyme';
import Card from './Card';
import React from 'react';






it('how many component',()=> {
    expect(shallow(<Card />).length).toEqual(1)
})

