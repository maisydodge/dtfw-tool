import React from "react";
import { Dropdown } from "semantic-ui-react";

class MyCustomBody extends React.Component {
  getFieldValue() {
    const newRow = {};
    this.props.columns.forEach((column, i) => {
      newRow[column.field] = this.refs[column.field].value;
    }, this);
    return newRow;
  }

  render() {
    const { columns, validateState } = this.props;
    return (
      <div className="modal-body">
        <h2 style={{ color: "red" }}>Custom body</h2>
        <div>
          {this.props.columns.map((column, i) => {
            const { editable, format, field, name, hiddenOnInsert } = column;

            if (hiddenOnInsert) {
              // when you want same auto generate value
              // and not allow edit, for example ID field
              return null;
            }
            return (
              <div className="form-group" key={field}>
                <label>{name}</label>
                <input ref={field} type="text" defaultValue={""} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyCustomBody;
