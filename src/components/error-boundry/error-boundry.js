import React,{Component} from 'react';
import errorImg from './404-error-3060993_1280.png'

export default class ErrorBoundry extends Component {
  state = {
    error: false
  };

  wrap = this.props.children;
  componentDidCatch() {
  
    this.setState({error: true})
  }
  renderError = () => {
    return <React.Fragment>
      <h1 className='error__title'>Sorry,something went terribly wrong!</h1>
      <div className='error__img'>
        <img alt='' src={errorImg}/>
      </div>
    </React.Fragment>
  }

  render() {
    console.log(this.state.error);
    
    if (this.state.error) {
      return <div className='error'>{this.renderError()}</div>
    }
    return <div className='error'>{this.wrap}</div>
  }
}