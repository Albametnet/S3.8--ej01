import React from 'react';


class  Clock extends React.Component {
  constructor (props){
    super(props);
      this.state = {
        hours: 0,
        minutes: 0,
        seconds: 0
      };

  this.updateClock = this.updateClock.bind (this);
  this.intervalito = setInterval (this.updateClock, 1000);
}
updateClock(){
  let time = new Date ();
  let timeS= time.getSeconds ();
  let timeM = time.getMinutes ();
  let timeH = time.getHours ();

this.setState ({
  hours: timeH,
  minutes: timeM,
  seconds: timeS


})
}
  render() {

   return (
    <div className="clock">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
       
);
}
}

export default Clock;