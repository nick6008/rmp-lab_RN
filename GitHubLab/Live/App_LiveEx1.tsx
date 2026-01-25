import { Component } from 'react';
const INTERVAL = 1000;
/* Live Example 1 */

class LiveTimer extends Component {
flag=true;
slive = "START =>";
	constructor(props) {
	super(props);
	this.state = { value: 0 };
	this.slive=this.slive+ "onCreate / constructor -> ";
}
increment() { /* */
	this.setState({ value: this.state.value + 1 });
	if(this.flag) this.slive=this.slive+ "increment -> ";
}
componentDidUpdate(){
	this.slive=this.slive+ "componentDidUpdate -> ";
}
componentDidMount() {
	this.timerID = setInterval(() => this.increment(), INTERVAL);
	if(this.flag) this.slive = this.slive + "onStart / componentDidMount -> ";
}
componentWillUnmount() {
	this.slive = this.slive + "onDestroy / componentWillUnmount => END";
	clearInterval(this.timerID);
}
render() {
	const { value } = this.state;
	if(this.flag) this.slive=this.slive+ "render -> ";
	if(value > 4 ) { /* stop timer */
	this.componentWillUnmount();
	this.flag=false;
}
return (
	<div>
	<h1>Жизненные циклы</h1>
	<p>Таймер:</p>
	<p>{this.slive}</p>
	<p>
	<span>{Math.floor(value / (INTERVAL * 60 * 60))}:</span>
	<span>{Math.floor((value % (INTERVAL * 60 * 60)) / (INTERVAL * 60))}:</span>
	<span>{Math.floor((value % (INTERVAL * 60)) / INTERVAL)}:</span>
	<span>{value % INTERVAL}</span>
	</p>
	</div>
	);
   }
}
export default LiveTimer;
