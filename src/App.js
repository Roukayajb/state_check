import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      person:{name:"Roukaya JB",bio:"A young girl(born in october 24 1994) diplomated in computer science,specialised in web developpement. ",imgSrc:"logo-r.jpg",profession:"Ingénieur"},
      show:false,
      timer :1,
      timerID:null
    
  }
}
showProfil=()=>{
  this.setState({show:!this.state.show})
}
ti(){
  this.setState({
    timer:this.state.timer+1
  })
}
componentDidMount(){
  this.setState({
    timerID:setInterval(() => this.ti(),1000)
  }) 
}
componentWillUnmount() {
  clearInterval(this.state.timerID);
}

  render() {
    return (
      <div>
          {this.state.show && ( <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
             <img src={this.state.person.imgSrc} alt=" roukaya" height={100} width={100} />
             <span className="name mt-3">{this.state.person.name}</span>
             <span className="idd">{this.state.person.profession}</span>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">{this.state.person.bio}</span>
        </div>
      
    </div>
  </div>
</div>
)}
<div className=" d-flex mt-2 justify-content-center">
        <button onClick={this.showProfil}>SHOW Profile</button>
 </div>
 <div className="d-flex flex-row justify-content-center align-items-center mt-3">
       <p>The component was mounted  {this.state.timer}seconds ago</p> 
         </div>
 </div>
    );
  }
}
