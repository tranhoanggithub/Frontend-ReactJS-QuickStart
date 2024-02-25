import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import './DoctorSchedule.scss';
import { Select } from 'react-select/dist/Select-fd7cb895.cjs.prod';
import moment from 'moment';
import localization from 'moment/locale/vi';
import {LANGUAGES} from '../../../utils';




class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays : [],
        }
    }

    async componentDidMount() {
        let {language}  = this.props;
        console.log(moment(new Date()).format('dddd - DD/MM'))
        console.log(moment(new Date().locale('en').format("ddd - DD/MM")));

        let arrDate = []
        for( let i =0 ; i<7; i++){
            let object = {};
            object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDate.push(object)
        }

    }
 
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {


        return (
            <div className="doctor-schedule-container">
                <div className="alt-schedule">
                    <select>
                        <option>Thứ 2</option>
                        <option>Thứ 3</option>
                        <option>Thứ 4</option>
                        <option>Thứ 5</option>
                    </select>
                </div>
                <div className="all-available-time">

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
