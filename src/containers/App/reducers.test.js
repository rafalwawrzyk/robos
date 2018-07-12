import { shallow } from "enzyme";
import * as reducers from './reducers';
import * as actions from './actions';




describe('searchRobots',() => {

    const initialState = {
        searchField:''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobotsReducer(undefined,{})).toEqual({searchField:''})
    })
    it('check change searchField action', () => {
        expect(reducers.searchRobotsReducer(initialState,{
            type:'SET_SEARCH_FIELD',
            payload:'abc'
        })).toEqual({
            searchField:'abc'
        })
    })

})



describe('request robotsReducer', () => {

    const initialStateRobots = {
        isPending:false,
        robots:[],
        error:''
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobotsReducer(undefined,{})).toEqual(initialStateRobots)
    })

    it('check pending action', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots,{
            type:'REQUEST_ROBOTS_PENDING'        
        })).toEqual({
            robots:[],
            isPending:true,
            error:''
        })
    })

    it('check success action', () => {
        const data = [
            {
                id:1,
                name:'John',
                email:'john@gmail.com'
            }
        ]    

        expect(reducers.requestRobotsReducer(initialStateRobots,{
            type:'REQUEST_ROBOTS_SUCCESS',
            payload:data
        })).toEqual({
            robots:data,
            isPending:false,
            error:''
        })
    })


    it('check failed action', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots,{
            type:'REQUEST_ROBOTS_FAILED',
            payload:'error OMG'
        })).toEqual({
            robots:[],
            isPending:false,
            error:'error OMG'
        })
    })



})