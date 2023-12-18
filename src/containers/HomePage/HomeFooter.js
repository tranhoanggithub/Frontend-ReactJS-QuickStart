import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



// import specialtyImg from "../../../assets/HomeFooter/co-xuong-khop.jpg"





class HomeFooter extends Component {


 
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
            <div className="home-footer">
                <p>&copy; 2023 Tran Hoang More information , please visit my youtube channel . <a href="https://www.youtube.com/watch?v=DXT9dF-WK-I&t=3599s"> &#8594;Click here &#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
