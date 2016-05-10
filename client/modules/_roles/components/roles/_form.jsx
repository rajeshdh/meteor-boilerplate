import React from 'react';
import t from 'tcomb-form';

export default React.createClass({
  submitForm(event) {
    event.preventDefault();
    var values = this.refs.form.getValue();
    if (values) {
      if (this.props._id) {
        this.props.submitAction(values, this.props._id);
      } else {
        this.props.submitAction(values);
      }
    }
  },

  onChange() {
    this.refs.form.getValue();
  },

  render() {

    const formModel = t.struct({
      title: t.String,
      content: t.maybe(t.String)
    });

    const formOptions = {
      config: {
      },
      fields: {
        title: {
          label: 'Title'
        },
        content: {
          type: 'textarea',
          attrs: {
            rows: 8
          }
        }
      }
    };

    const {error, record} = this.props;
    const Form = t.form.Form;
    const title = this.props._id ? 'Edit: ' + record.title : 'Add new';
    const buttonLabel = 'Save';

    return (
      <div>
        <h3>{title}</h3>
        {error ?
        <div className="alert alert-danger" onClick="">
          <span className="octicon octicon-megaphone"></span>
          {error}
        </div> : null }
        <Form ref="form"
          type={formModel}
          options={formOptions}
          value ={record}
          onChange={this.onChange}
        />
        <button className="btn btn-primary" onClick={this.submitForm}>{buttonLabel}</button>

      </div>
    );
  }

});
