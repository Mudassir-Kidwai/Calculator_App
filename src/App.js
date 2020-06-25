import React from 'react';
import './App.css';
import SingleButton from './components/SingleButton';
import Answer from './components/Answer';


class App extends React.Component{
    state = {result: ""};

    onPressing = event => {
        if(event.target.name === "="){
            this.calculate()
        }

        else if(event.target.name === "C"){
            this.reset()
        }
        else if(event.target.name === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + event.target.name
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        checkResult = this.state.result
        try {// eslint-disable-next-line
            this.setState({result: (eval(checkResult) || "" ) + ""})
        } catch (event) {
            this.setState({result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="App">
                    <h1>Simple Calculator</h1>
                    <SingleButton result={this.state.result} operation={this.onPressing}/>
                    <Answer result={this.state.result}/>
                </div>
            </div>
        );
    }
}

export default App;


/*

        <InputTag textName="Input1: " type ="number" operation={this.inputOperation1}/>
        <InputTag textName="Input2: " type ="number" operation={this.inputOperation2}/> <br/>
  countAdd = () =>{
    this.setState({count: this.state.count +1});
  }
  countSub = () => {
    this.setState({count: this.state.count -1});
  }
  hideText = () => {
    this.setState({hidenseek: false});
  }
  unhideText = () => {
    this.setState({hidenseek: true});
  }

     <p style={{visibility:this.state.hidenseek==true?"visible":"hidden"}}>count: {this.state.count}</p>
      <button onClick = {this.countAdd}>Add one</button>
      <button onClick = {this.countSub}>Subtract one</button>
      <button onClick = {this.hideText}>Hide</button>
      <button onClick = {this.unhideText}>Unhide</button>
 */