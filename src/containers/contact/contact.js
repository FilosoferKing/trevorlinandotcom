import React, { Component } from 'react';
import styles from './contact.css';
import { sendForm } from '../../actions/index';
import { reduxForm } from 'redux-form';

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
        console.log('Props: ', props);
        console.log('Info Sent: ', props.formInfo.result == 'yo');
        this.setState({
            nameVal: this.props.values.name,
            emailVal: this.props.values.email,
            subjectVal: this.props.values.subject,
            messageVal: this.props.values.message
        });
        console.log(this.state);
    };

    render() {

        return (
            <div className={styles.contactContainer}>
                {this.formDisplay()}
            </div>
        );
    }

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

    onSubmit = (props) => {
        this.setState({reset: false});
        if (this.state.nameVal) {
            console.log(props);
            this.props.sendForm(props);
        }
    }

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
                    {this.props.thankYouImage}
                    <div></div>
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
}

const mapStateToProps = (state) => {
    return {
        formInfo: state.sendFormInfo
    }
}

export default reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'contact',                           // a unique name for this form
    fields: ['name', 'email', 'subject', 'message'], // all the fields in your form
    validate
}, mapStateToProps, { sendForm })(ContactForm);







