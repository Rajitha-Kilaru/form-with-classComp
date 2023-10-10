import React , { Component } from 'react';


export default class ClassForm2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			Firstname: '',
			Lname: ''
		}
	}

	checkCondition = (event) => {
		this.setState({ name: event.target.value })
	}	

	submitFunc = (event) => {
		event.preventDefault();
		alert("You r Submiting" + " " + this.state.name);
	}

	multiField = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]:value});
		

	}

	render() {
		console.log(this.state.name);
		let condText= '' ;
		if(this.state.name) {
			condText = <h2>If condition true this text display</h2>;
		}else {
			condText = '';
		}

		return(
			<div>
				<h1>Welcom to Comp 2</h1>
				<form>
					<p><label>Firstname: </label><input type="text" value= {this.props.toComp2.firstName}/></p>
					<p><label>Lastname: </label><input type="text" value= {this.props.toComp2.lastName}/></p>
					<p><label>Email: </label><input type="text" value= {this.props.toComp2.email}/></p>
					<p><label>Password: </label><input type="password" value= {this.props.toComp2.pswd}/></p>
					<p><label>Address: </label><input type="text" value= {this.props.toComp2.addr}/></p>
				</form>

				<form onSubmit = {this.submitFunc}>
					<h2>OnSubmit Checking   the Condition to Display any Text</h2>
					<p><label>Name:<input type="text" onChange={this.checkCondition} /></label></p>
					<p><input type="submit"/> </p>
				</form>
				{condText}


				<form>
					<h2>With Multiple Fields</h2>
					<p><label>Fname: <input type="text" name="Firstname" onChange={this.multiField} /></label></p>
					<p><label>Lname: <input type="text" name="Lname" onChange={this.multiField} /></label></p>
				</form>
				<p>{this.state.Firstname}</p> 
				<p>{this.state.Lname}</p>
			</div>
		);
	}
}