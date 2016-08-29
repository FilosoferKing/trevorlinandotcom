import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
/* CSS Styles for About */
import styles from './contact.css';
/* Redux Actions */
import { sendForm } from '../../actions/index';

import IconButton from 'material-ui/IconButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';

export default class ContactForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            nameVal: '',
            emailVal: null,
            subjectVal: null,
            messageVal: null,
            reset: true
        }

    }

    componentWillReceiveProps = (props) => {
        //console.log('Props: ', props);
        //console.log('Info Sent: ', props.formInfo.result == 'yo');

        /**
         * Update input values from state
         */
        this.setState({
            nameVal: this.props.values.name,
            emailVal: this.props.values.email,
            subjectVal: this.props.values.subject,
            messageVal: this.props.values.message
        });
        //console.log(this.state);
    };

    render() {
        return (
            <div className={styles.contactContainer}>
                {this.formDisplay()}
                {this.contactInfo()}
            </div>
        );
    }

    /**
     * Name input
     * @param name
     * @returns input field
     */
    name = (name) => {
        return (
            <div className={styles.inputDiv}>
                <div className={styles.labelDiv}>
                    <label>Name</label>
                </div>
                <input type="text" placeholder={name.touched && name.invalid ? name.error : ''} {...name} />
            </div>
        );

    };

    /**
     * Email input
     * @param email
     * @returns email field
     */
    email = (email) => {
        if(this.state.nameVal) {
            return (
                <div className={styles.inputDiv}>
                    <div className={styles.labelDiv}>
                        <label>Email</label>
                    </div>
                    <input type="email" placeholder={email.touched && email.invalid ? email.error : ''} {...email}/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    /**
     * Subject input
     * @param subject
     * @returns subject field
     */
    subject = (subject) => {
        if(this.state.emailVal) {
            return (
                <div className={styles.inputDiv}>
                    <div className={styles.labelDiv}>
                        <label>Subject</label>
                    </div>
                    <input type="text" placeholder={subject.touched && subject.invalid ? subject.error : ''} {...subject}/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    /**
     * Message input
     * @param message
     * @returns message field
     */
    message = (message) => {
        if(this.state.subjectVal) {
            return (
                <div className={styles.inputDiv}>
                    <div className={styles.labelDiv}>
                        <label>Message</label>
                    </div>
                    <textarea type="text" placeholder={message.touched && message.invalid ? message.error : ''} {...message}/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    /**
     * Submit button
     * @returns button div
     */
    button = () => {
        if(this.state.messageVal) {
            return (
                <button type="submit">SEND</button>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    /**
     * Submit form
     * @param props
     */
    onSubmit = (props) => {
        this.setState({reset: false});
        if (this.state.nameVal) {
            //console.log(props);
            this.props.sendForm(props);
        }
    };

    /**
     * Display form and error messages
     * @returns form & error divs
     */
    formDisplay = () => {
        const { fields: {name, email, subject, message}, handleSubmit, resetForm} = this.props;
        if (this.props.formInfo.result == 'yo' && !this.state.reset) {
            setTimeout(() => {
                resetForm('contact');
                this.setState({
                    nameVal: '',
                    emailVal: null,
                    subjectVal: null,
                    messageVal: null,
                    reset: true
                })
            }, 3000);
            return (
                <div className={styles.thankYou}>
                    <img src="../../../public/images/contact_thankyou.png"/>

                    <div></div>
                </div>
            );
        } else if (this.props.formInfo.result == 'uh oh' && !this.state.reset) {
            setTimeout(() => {
                resetForm('contact');
                this.setState({
                    nameVal: '',
                    emailVal: null,
                    subjectVal: null,
                    messageVal: null,
                    reset: true
                })
            }, 3000);
            return (
                <div className={styles.thankYou}>
                   <h1>Uh oh! Technical difficulties. <br />My apologies for the inconvenience.</h1>
                </div>
            );
        } else {
            if(this.state.reset) {
                return (
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={styles.contactForm}>
                        {this.name(name)}
                        {this.email(email)}
                        {this.subject(subject)}
                        {this.message(message)}
                        {this.button()}
                    </form>
                );
            }
        }
    };

    /**
     * Display contact information
     * @returns contact info div
     */
    contactInfo = () => {
        return (
            <div className={styles.contactInfoContainer}>
                <div>trevorlinan@gmail.com</div>
                <div>714.926.2086</div>
                <div>
                    <a href="http://www.ingenconcepts.com/resume.pdf" target="_blank">
                        Resume <FileDownload />
                    </a>
                </div>
            </div>
        );
    }

}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "What do you call yourself? ";
    }

    if (!values.email) {
        errors.email = "I'd like to email you back!";
    }

    if (!values.subject) {
        errors.subject = "What's this message about?";
    }

    if (!values.message) {
        errors.message = "Don't forget to say hello!";
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        formInfo: state.sendFormInfo
    }
};

export default reduxForm({
    form: 'contact',
    fields: ['name', 'email', 'subject', 'message'],
    validate
}, mapStateToProps, { sendForm })(ContactForm);







