import React, {Component} from "react";
import MadlibContent from "./MadLibContent";
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';
import "./style/MadLibForm.css";
//we can use the Component 
//Components defined as classes 
//currently provide more features which 
//are described in detail on this page. 
//To define a React component class, you need to extend React
//.Component:

function MadlibInput(props) {
    return (
        <Col md="3" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="green-label">{props.index}</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );
};

class MadLibForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            noun: '',
            noun2: '',
            adjective:'',
            color: ''
        }
    };
    //we should handle change and handlesubmit
    handleChange = function(props) {
        return function(e){
            this.setState({[props.inputTitle]: e.target.value});
            // console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this)
    };
    //we need to handle submit
    handleSubmit = function(e)  {
        this.setState({completedForm: true});
        e.preventDefault()
    }.bind(this);

    //we need to handleClick
    handleClick = function() {
        this.setState({
            completedForm: false,
            noun: '',
            noun2: '',
            adjective:'',
            color: ''
        });
    }.bind(this);

    //we need a button to submit
    renderButton = function(){
        if(this.state.completedForm){
            //if the form is completed, clear the form first
            return <a classnmae = "clear-button" onClick = {this.handleClick}> Clear Form </a>

        }
        return <input type = "submit" className= "submit-button" value = "Generate Mad Lib" />
    }
    render() {
        this.inputData = [
            {placeholder: 'Color', prop: 'color', state: this.state.color},
            {placeholder: 'Noun', prop: 'noun', state: this.state.noun},
            {placeholder: 'Adjective', prop: 'adjective', state: this.state.adjective},
            {placeholder: 'Noun2', prop: 'noun2', state: this.state.noun2}
        ]
    return(
        <div className = "card-wrapper">
            <Card>
                <form onSubmit={this.handleSubmit} id="madlib-form">
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                return <MadlibInput 
                                key={indexKey} index={indexKey + 1} 
                                state={data.state} 
                                placeholder={data.placeholder} 
                                onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md="12" className="button-wrapper">
                            {this.renderButton()}
                        </Col>
                    </Row>
                </form>
                <MadlibContent data={this.state}/>
            </Card>
        </div>
        )
    }
}
export default MadLibForm;