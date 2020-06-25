import React from 'react';
class Answer extends React.Component{
    render() {
        return (
            <>
                <p className="answer">Result: {this.props.result}</p>
            </>
    );
    }
}
export default Answer;