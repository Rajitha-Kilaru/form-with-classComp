import React , { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ClassForm2 from './ClassForm2.js';

export default class ClassForm extends React.Component {
	state = {
		firstName : '',
		lastName : '',
		email : '',
		pswd : '',
		addr : ''
	}

	enterFname = (event) => {
		this.setState({firstName: event.target.value});
	}

	enterLname = (event) => {
		this.setState({lastName: event.target.value});
	}

	enterEmail = (event) => {
		this.setState({email: event.target.value});
	}

	enterPassword = (event) => {
		this.setState({pswd: event.target.value});
	}

	enterAddress = (event) => {
		this.setState({addr: event.target.value});
	}


	render() {
		return(
			<router>
				<div>
					<form>
						<ul type="none">
							<li><label>Firstame: </label><input type="text" onChange={this.enterFname}/></li>
							<li><label>Lastname: </label><input type="text" onChange={this.enterLname}/></li>
							<li><label>Email:   </label><input type="text" onChange={this.enterEmail}/></li>
							<li><label>Password: </label><input type="password" onChange={this.enterPassword}/></li>
							<li><label>Address: </label><input type="text" onChange={this.enterAddress}/></li>
						</ul>	
					</form>
					
					<h2>Data from Form</h2>
					<label>Firstname: </label><input type="text" value= {this.state.firstName}/>
					<label>Lastname: </label><input type="text" value= {this.state.lastName}/>
					<label>Lastname: </label><input type="text" value= {this.state.email}/>
					<label>Lastname: </label><input type="text" value= {this.state.pswd}/>
					<label>Lastname: </label><input type="text" value= {this.state.addr}/>

					<button><Link to="/ClassForm2">Send To Next Form</Link></button>
					<Switch>
						<Route exact path="/ClassForm2" component= {()=><ClassForm2 toComp2={this.state}/>} />
					</Switch>
				</div>
			</router>
		);
	}
}