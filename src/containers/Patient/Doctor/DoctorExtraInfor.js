import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import '../Doctor/DoctorExTraInfor.scss';
import { Select } from 'react-select/dist/Select-fd7cb895.cjs.prod';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';




class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }

    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    isShowDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { allDays, allAvalableTime } = this.state;
        let { language } = this.props;
        let { isShowDetailInfor } = this.state;
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">ĐỊA CHỈ KHÁM</div>
                    <div className="name-clinic">Phòng khám chuyên khoa Da Liễu</div>
                    <div className="detail-address">207 Phố Huế - Hai Bà Trưng - Hà Nội</div>
                </div>
                <div className="content-down">
                    {isShowDetailInfor === false &&
                        <div className="short-infor">
                            GIÁ KHÁM : 250.000 đ <span onClick={() => this.isShowDetailInfor(true)}>Xem chi tiết</span>
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
