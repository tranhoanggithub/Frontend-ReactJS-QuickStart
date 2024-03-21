import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import '../Doctor/DoctorExTraInfor.scss';
import { Select } from 'react-select/dist/Select-fd7cb895.cjs.prod';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getExtraInforDoctorById } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';




class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        }
    }

    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
            this.setState({
                extraInfor: res.data
            })
        }
    }

    isShowDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor, extraInfor } = this.state;
        console.log("ooooooooooooo", this.state)
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">ĐỊA CHỈ KHÁM</div>
                    <div className="name-clinic">{extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ''}</div>
                    <div className="detail-address">{extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}</div>
                </div>
                <div className="content-down">
                    {isShowDetailInfor === false &&
                        <div className="short-infor">
                            GIÁ KHÁM : {extraInfor && extraInfor.priceTypeData ? extraInfor.priceTypeData.valueVi : ''} <span onClick={() => this.isShowDetailInfor(true)}>Xem chi tiết</span>
                        </div>
                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className="title-price">GÍA KHÁM:.</div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left">Gía khám</span>
                                    <span className="right">250.000 đ</span>
                                </div>
                                <div className="note">
                                    Gía khám Được ưu tiên khám trước khi đặt khám qua Booking Care . Gía khám cho người nước ngoài là 250.000 đ
                                </div>
                            </div>
                            <div className="payment">Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt hoặc quẹt thẻ</div>
                            <div className="hide-price"><span onClick={() => this.isShowDetailInfor(false)}>Ẩn bảng giá</span></div>
                        </>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
