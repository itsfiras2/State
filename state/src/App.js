import React, { Component } from 'react';
import { Button,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';








class profileS extends Component {
  state = {
    Person: {
      fullName: "Firas Saadi",
      bio: "Full-Stack JS Student",
      imgSrc: "profile.jpg",
      profession: "Student"
    },
    show: false,
    time: 0
  }

  visibility = () => {
    this.setState({ show: !this.state.show })
    this.setState({ time: 0 })
  }

  componentDidMount() {
    setInterval(() => {

      this.setState({ time: this.state.time + 1 })
    }, 1000);
  }

  render() {
    const Chrono=()=>{
        if (this.state.time < 60){
            return this.state.time + '  '+'second(s)'
        }
    {
        const SS = this.state.time % 60 ;
        const MM = ((this.state.time / 60)%60).toFixed(0) ;
        const HH = ((this.state.time / (60 *60))).toFixed(0) ;
        return `${HH}H:${MM}M:${SS}`
    
    }}
    return (
       
       
<div className="App" >
<div className="div-btn">{(!this.state.show) ? 
<Button id="btn" variant="outline-success" size="lg" block onClick={this.visibility}>
            Show Profile
            
</Button> :
            <div  >
<Button id="btn" variant="outline-danger" size="lg" block onClick={this.visibility}>
                Hide Profile
</Button>
            <div className='name-1'  style={{margin:'50px'}} >
             <img  className="img-top"  src={this.state.Person.imgSrc} />
              <br/>
              <div className="profileA" style={{margin:'50px'}}>
                <span>{this.state.Person.fullName}</span>
                <br/>
                <hr/>
                <span>{this.state.Person.profession}</span>
                <br/>
                <hr/>
                <span >{this.state.Person.bio}</span>
              </div>
            </div>
            <div className="ChronoS">
            
            <h4 >{Chrono()} </h4>
            </div>
            <br/>
            <br/>
            <br/>
          </div>}
          
</div>

</div>

)
  }
}
export default profileS;
