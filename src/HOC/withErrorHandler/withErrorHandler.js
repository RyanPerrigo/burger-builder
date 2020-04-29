import React, {Component} from 'react';
import Model from '../../components/UI/Model/Model';



const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {

            axios.interceptors.request.use( request => {
                this.setState({error: null});
                return request;
            });

            axios.interceptors.response.use(response => (response, error) => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render () {
             return (
            <>
                <Model
                modelClosed={this.errorConfirmedHandler}
                show={this.state.error}>
                    {this.state.error ? this.state.error.message: null}
                </Model>
                <WrappedComponent {...this.props} />
            </>
        );
    }
        }
        
       
}

export default withErrorHandler;