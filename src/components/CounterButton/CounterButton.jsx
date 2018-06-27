import React,{Component} from 'react'

 class CounterButton extends Component{
     constructor(props){
         super(props);
         this.state = {
             count:0
         }
     }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count !== this.state.count){
            return true;
        }
        return false
    }

    updateCount = () => {
        const newState = {
            ...this.state,
            count:this.state.count + 1
        }
        this.setState(newState)
    }
    
    render(){
        console.log('counter')
        return (
            <div>
              <button color={this.props.color} onClick={this.updateCount}>Count:{this.state.count}</button>
            </div>
          )
    }

}


export default CounterButton;