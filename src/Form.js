import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

class Form extends Component {

    state = {
        text: '',
        errors: [],
        results: []
    };

    handleChange = e => {
        this.setState({text: e.target.value})
    };

    componentWillMount(){
        document.body.style.backgroundColor = "#ededee";
    }

    renderErrors = () => {
        const {errors} = this.state;
        if(errors)
            return errors.map( (error, index) => this.renderSingleError(error, index) );
    };

    sendRequest = () => {

        //Clear errors
        this.clearErrors();

        if(!this.validateInput())
            return;

        const {text} = this.state;
        axios.get(`${BASE_URL}/api/fizzbuzz?number=${text}`)
            .then( response => this.setState({results: response.data.fizzbuzz}) )
            .catch( error => this.setState({errors: ['Uups something went wrong']}));
            
    };

    validateInput = () => {
        const {text, errors} = this.state;
        let resp = true;

        if(text === ''){
            this.setState({errors: ['Fill in the input']});
            resp = false;
        }
        if(!this.isNumber(text)){
            this.setState({errors: ['Value should be a number']});
            resp = false;
        }
        if(parseInt(text) <= 0)
        {
            this.setState({errors: ['Value should be bigger than 0']});
            resp = false;
        }

        return resp;

    };
     
    isNumber = (n) =>  { 
        return !isNaN(parseInt(n)) && !isNaN(n - 0) 
    };

    clearErrors = () => {
        this.setState({errors: []});
    };

    renderSingleError = (error, index) => {
        return (
           <div key={index}>
               <CloseIcon style={{fontSize: 12}} />
               {error}
               <br/>
           </div>
        )
    };

    render(){
        return(
            <div style={{ display: 'flex' }}>
                <div style={{margin: 'auto', width: 550, padding:5}}>
                    <Paper elevation={1} style={styles.paper}>
                        <div className="error alert-danger" style={styles.errorContainer}>
                            {this.renderErrors()}
                        </div>
                        <Typography variant="headline" component="h3" style={styles.typography}>
                            FizzBuzz.
                        </Typography>
                        <div>
                            <div className="form-group">
                                <input className="form-control"
                                   type="text"
                                   placeholder="Please enter the number"
                                   onChange={this.handleChange}
                                   value={this.state.input}
                                   name="name" />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    className="form-control"
                                    value={this.state.results}
                                    style={styles.textAreaStyle}
                                    disabled 
                                    rows="6" 
                                    cols="50">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-info"
                                    style={styles.submitButton}
                                    onClick={this.sendRequest}
                                >
                                Submit
                                </button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
            )
    }
}


const styles = {
    paper: {
        padding: 5
    },
    errorContainer: {
        borderRadius: '0.2em', 
        fontSize:14
    },
    submitButton: {
        width: '100%'
    },
    typography: {
        padding: 5
    },
    textAreaStyle: {
        letterSpacing: 2
    }
  };


export default Form;