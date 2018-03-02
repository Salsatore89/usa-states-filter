import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectState } from '../actions/select-state';
import Select from 'react-select';
import axios from 'axios';

class Filter extends Component {
    state = {
        removeSelected: true, // Remove the states picked from the list
        stayOpen: false, // Leave the list open once the state is selected from it
        value: [], // Values selected from dropdown
        errorMsg: '', // error message displayed en case local storage fails
        wikiInfo: '',
        wikiLink: ''
    };
    handleSelectChange = (value) => {
        this.setState({
            value: value
        });
    }
    handleClick = (value) => {
        this.props.selectState(value.label)
        axios
            .get(
                `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value.label}&format=json`
            )
            .then(data => {
                this.setState({
                    // Get wikiInfo (trimmed) and wikiLink of clicked state
                    wikiInfo: data.data[2][0].substring(0, 180) + '...',
                    wikiLink: data.data[3][0]
                });
            })
            .catch(err => {
                this.setState({
                    errorMsgUnsplashImg: 'Sorry, an error occurred, wikipedia info could not be loaded' + err
                });
            });
    }
    // Remove input from any character that isn't a letter or a space
    cleanInput = (inputValue) => {
        return inputValue.replace(/[^A-z\s]/g, "");
    }
    // This method emulates an asynchronous call to a server
    getStates = (input, callback) => {
        // Take the user input and compare with substring of dropdown values
        input = input.toLowerCase();
        var options = this.props.states.filter(state => {
            return state.label.substr(0, input.length) === input;
        });
        // Load data after setTimeout
        var data = {
            options: this.props.states
        };
        setTimeout(function () {
            callback(null, data);
        }, 300);
    }
    componentDidMount() {
        // Get the saved values from localStorage
        try {
            const json = localStorage.getItem('value');
            const value = JSON.parse(json);
            // Update the state accordingly
            if (value) {
                this.setState(() => ({ value }));
            }
        } catch (e) {
            this.setState(() => ({
                errorMsg: 'Sorry, an error occurred and your selected states couldn\'t be loaded. ' + e
            }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // Once the component is updated, save it state
        // in localStorage, if it has changed
        if (prevState.value.length !== this.state.value.length) {
            const json = JSON.stringify(this.state.value);
            localStorage.setItem('value', json);
        }
    }
    // Select.Async component comes from react-select module.
    // Setting options and usage: npmjs.com/package/react-select
    render() {
        return (
            <section className="filter">
                <h1 className="filter__heading">US states <span className="filter__heading-red">filter!</span></h1>
                <h3 className="filter__heading-tertiary">Choose one or multiple US states from the dropdown list. You can:</h3>
                <div className="filter__instructions">
                    <ul>
                        <li>✓ Delete your selection and refresh or close the page, the data will be stored!</li>
                        <li>✓ Click on one of the states selected and a new background image related with it will appear.</li>
                        <li>✓ An intro of its wikipedia article will also appear below.</li>
                    </ul>
                </div>
                <p className="filter__error">{this.state.errorMsg}</p>
                <Select.Async
                    closeOnSelect={!this.state.stayOpen}
                    multi
                    onInputChange={this.cleanInput}
                    noResultsText="Sorry, no states match your search..."
                    loadingPlaceholder="Loading states from mock server..."
                    onChange={this.handleSelectChange}
                    loadOptions={this.getStates}
                    placeholder="Select your favourite(s) USA state(s)"
                    removeSelected={this.state.removeSelected}
                    simpleValue={false}
                    value={this.state.value}
                    label={this.state.label}
                    onValueClick={((value) => this.handleClick(value))}
                />
                {this.state.wikiInfo &&
                    <div className="filter__wiki">
                        <p className="filter__wiki-info"><img className="filter__wiki-icon" src="../public/img/info-icon.png" alt="Wikipedia info" />{this.state.wikiInfo}</p>
                        <a className="filter__wiki-link" href={this.state.wikiLink} target="_blank">more info &rarr;</a>
                    </div>
                }
            </section>
        );
    }
};

function mapStateToProps(state) {
    return {
        states: state.states
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectState: selectState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
