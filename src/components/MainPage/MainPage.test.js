import { shallow } from "enzyme";
import React from 'react';
import MainPage from './MainPage'


let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn,
        robots:[],
        searchField:'',
        isPending:false
    }
    wrapper = shallow(<MainPage {...mockProps} /> )
})


it('renders MainPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filter correctly 1', () => {
    const mockProps = {
        onRequestRobots: jest.fn,
        robots:[{
            id:3,
            name:'John',
            email:'john@gmal.com'
        }],
        searchField:'john',
        isPending:false
    }
    const wrapper2 = shallow(<MainPage {...mockProps} /> )
    expect(wrapper2.instance().filteredRobots([])).toEqual([])
})


it('filter correctly 2', () => {
    const mockProps = {
        onRequestRobots: jest.fn,
        robots:[
            {
                id:3,
                name:'John',
                email:'john@gmal.com'
            },
            {
                id:4,
                name:'Anne',
                email:'anne@gmail.com'
            }
    ],
        searchField:'john',
        isPending:false
    }
    const wrapper3 = shallow(<MainPage {...mockProps} /> )
    expect(wrapper3.instance().filteredRobots(mockProps.robots)).toEqual([{"email": "john@gmal.com", "id": 3, "name": "John"}])
})


it('pending test true', () => {
    const mockProps = {
        onRequestRobots: jest.fn,
        robots:[
            {
                id:3,
                name:'John',
                email:'john@gmal.com'
            },
            {
                id:4,
                name:'Anne',
                email:'anne@gmail.com'
            }
    ],
        searchField:'john',
        isPending:true
    }

    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.find('#pended').length).toEqual(1)
})


it('pending test false', () => {
    const mockProps = {
        onRequestRobots: jest.fn,
        robots:[
            {
                id:3,
                name:'John',
                email:'john@gmal.com'
            },
            {
                id:4,
                name:'Anne',
                email:'anne@gmail.com'
            }
    ],
        searchField:'john',
        isPending:false
    }

    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.find('#pended').length).toEqual(0)
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('Searchbox').length).toEqual(1)
    expect(wrapper.find('CardList').length).toEqual(1)

    

})