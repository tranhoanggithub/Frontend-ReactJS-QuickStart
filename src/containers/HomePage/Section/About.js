import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



// import specialtyImg from "../../../assets/About/co-xuong-khop.jpg"





class About extends Component {


 
    render() {


        // let settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //   };
        // let settings = this.props.settings;
        return (
            <div className="section-share section-about">
                <div className='section-about-header'>
                    Truyen thong noi ve chanel Hoi Dan IT
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="60%" height="400px"
                        src="https://www.youtube.com/watch?v=Y21pGtZiVIs"
                        title='Youtube video player'
                        frameborder="0"
                        allow="accelerometer ; autoplay; clipboard-write; encrypted-media; gyroscope"                        
                        allowfullscreen>

                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                        Trong video này, chúng ta sẽ hoàn tất việc design giao diện theo trang bookingcare.vn. Chúng ta sẽ hoàn thiện những phần đang còn dang dở, để từ video tiếp theo, chúng ta sẽ bắt đầu làm về backend và react để tạo dữ liệu thật cho trang home design này.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
