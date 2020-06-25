import React from 'react';
class SingleButton extends React.Component{
    render() {
        return (
            <div className="calculator">
                <button className="button" name="CE" onClick={this.props.operation}>CE</button>
                <button className="button" name="C" onClick={this.props.operation}>C</button><br/>
                <button className="button" name="1" onClick={this.props.operation}>1</button>
                <button className="button" name="2" onClick={this.props.operation}>2</button>
                <button className="button" name="3" onClick={this.props.operation}>3</button><br/>
                <button className="button" name="4" onClick={this.props.operation}>4</button>
                <button className="button" name="5" onClick={this.props.operation}>5</button>
                <button className="button" name="6" onClick={this.props.operation}>6</button><br/>
                <button className="button" name="7" onClick={this.props.operation}>7</button>
                <button className="button" name="8" onClick={this.props.operation}>8</button>
                <button className="button" name="9" onClick={this.props.operation}>9</button><br/>
                <button className="button" name="+" onClick={this.props.operation}>+</button>
                <button className="button" name="-" onClick={this.props.operation}>-</button><br/>
                <button className="button" name="*" onClick={this.props.operation}>*</button>
                <button className="button" name="/" onClick={this.props.operation}>/</button><br/>
                <button className="button" name="=" onClick={this.props.operation}>=</button><br/>
            </div>
        );
    }
}


export default SingleButton;


/*                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
*/