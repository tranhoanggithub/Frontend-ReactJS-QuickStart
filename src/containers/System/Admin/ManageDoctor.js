import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from "../../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss'

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
        };
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }
    handleSaveContentMarkdown = () => {
        alert('click me')
    }
    render() {
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">Tạo thêm thông tin doctors</div>
                <div className="more-infor"><textarea>sds</textarea></div>
                <div className="manage-doctor-editor"><MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} /></div>
                <button onClick={() => this.handleSaveContentMarkdown()} className="save-content-doctor">Lưu thông tin</button>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
