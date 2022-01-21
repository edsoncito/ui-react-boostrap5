import React, { Component } from 'react';

export default class HoraPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:props.defaultValue
        };
    }
    value(){
        return this.state.value;
    }
    render() {
        return (
            <div class="dropdown">
                <input type="text" className="form-control dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true" value={this.state.value} readOnly />
                <ul className="dropdown-menu scrollable-menu " aria-labelledby="dropdownMenu2">
                    {[
                        "00:00","00:30", "01:00","01:30", "02:00","02:30", "03:00","03:30", "04:00","04:30", "05:00", "05:30","06:00","06:30", "07:00","07:30", "08:00","08:30", "09:00","09:30", "10:00","10:30", "11:00","11:30",
                        "12:00","12:30", "13:00","13:30", "14:00","14:30", "15:00","15:30", "16:00","16:30", "17:00", "17:30", "18:00","18:30", "19:00","19:30", "20:00","20:30", "21:00","21:30", "22:00","22:30", "23:00","23:30"
                    ].map((key) => {
                        return (<li><button className="dropdown-item" type="button" onClick={() => {
                            this.state.value = key;
                            this.setState({ ...this.state });
                            if(this.props.onChange){
                                this.props.onChange(key);
                            }
                        }}>{key}</button></li>)
                    })}
                </ul>
            </div>
        );
    }
}
