import React, { Component } from 'react';
import './Form.css';

class Table extends Component {
    constructor() {
        super();
        this.Add = this.Add.bind(this);
    }
    Add() {
        this.props.Information(true);
    }
    render() {
        return (
            <div>
                <div className="tbl">
                <h1>Employee Information Table</h1>
                <table className="Table">
                    <thead>
                        <tr className="column">
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Email</td>
                            <td>Salary  </td>
                            <td>JobStartDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.taking.map(item=> {
                            return (
                                <tr className="column">
                                    <td className="">{item.FirstName}</td>
                                    <td className="">{item.LastName}</td>
                                    <td className="">{item.Email}</td>
                                    <td className="">{item.Salary}  </td>
                                    <td className="">{item.JobStartDate}</td>
                                </tr>
                            )
                        }
                        )
                        }
                    </tbody>
                </table>
                <button className="btn btn-primary" id="btn1"onClick={this.Add}>Add Details</button>
                </div>
            </div>
        );
    }
}
export default Table;