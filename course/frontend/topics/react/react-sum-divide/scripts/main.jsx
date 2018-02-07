'use strict'

class OperateNumber extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    addOne() {
        this.setState(prevState => {
            return { count:  prevState.count + 1 }
        });
    }

                                          
    render() {
        return (
            <div>
                {/* add 1 to main display */}
                <div className="number">
                    <div className="display">{this.state.count}</div>
                    <button type="submit" className="round-red-button" onClick={() => this.addOne()} >Add</button>
                </div>

                <Multiply 
                    count={this.state.count*2}
                />
                <Divided 
                    count={this.state.count / 2}
                />

          
            </div>
        )
    }
    


}

class Multiply extends React.Component {

 

    render() {
        return <div>
            <div className="multiply">
                <div className="display">{this.props.count}</div></div>
        </div>

    }

}

class Divided extends React.Component {



    render() {
        return <div>
            <div className="divide">
                <div className="display">{this.props.count}</div></div>
        </div>
    }



}




ReactDOM.render(<OperateNumber />,
    document.getElementById('root'))