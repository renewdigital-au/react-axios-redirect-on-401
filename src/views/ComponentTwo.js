import React from 'react';
import {ServiceContext} from '../components/ServiceProvider';

export default class ComponentTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
    }

    componentDidMount() {
        this.context.getTest().then((result) => {
            this.setState({result})
        })
    }

    render() {
        return (
            <div>
                <h1>Component Two</h1>
                <pre>{JSON.stringify(this.state.result, null, 4)}</pre>
            </div>
        );
    }
}

ComponentTwo.contextType = ServiceContext;
