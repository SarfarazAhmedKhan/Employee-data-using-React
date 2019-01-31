import React,{Component} from 'react';
import './Form.css';

export default class Details extends Component{
    constructor(){
        super();
        this.state={
                FirstName:'',
                LastName:'',
                Salary:'',
                Email:'',
                JobStartDate:''
        };
        this.FirstName=this.FirstName.bind(this);
        this.LastName=this.LastName.bind(this);
        this.Email=this.Email.bind(this);
        this.Salary=this.Salary.bind(this);
        this.JobStartDate=this.JobStartDate.bind(this);
    }
    FirstName(e){
        this.setState({
           FirstName:e.target.value
        });
    }
    LastName(e){
        this.setState({
            LastName:e.target.value    
        });
    }
    Email(e){
        this.setState({
           Email:e.target.value    
        });
    }
    Check(){
        this.props.Information(false);
    }
    Salary(e){
        this.setState({
            Salary:e.target.value    
        });        
    }
    JobStartDate(e){
        var date=new Date();
        this.setState({
            JobStartDate:date.getMonth()+'/'+date.getDay()+'/'+date.getFullYear()
        });
    }
    AddDetails(f,l,s,e,j){
        this.props.Info(f,l,s,e,j);
    }
    render(){
        const {FirstName,LastName,Salary,Email,JobStartDate}=this.state;
        return(
            <div className="Details">
                <h1>Form Details</h1>
                <table class="tb">
                <tbody>
                    <tr class="row">
                        <td className="col">FirstName=</td>
                        <td className="col"><input onBlur={this.FirstName} placeholder="Name.."/></td>
                    </tr>
                    <tr class="row">
                        <td className="col">LastName=</td>
                        <td className="col"><input onBlur={this.LastName}placeholder="LastName.."/></td>
                    </tr>
                    <tr class="row">
                        <td className="col">Email=</td>
                        <td className="col"><input onBlur={this.Email} placeholder="Email.."/></td>
                    </tr>
                    <tr class="row">
                        <td className="col">Salary=</td>
                        <td className="col"><input onBlur={this.Salary} placeholder="Salary.."/></td>
                    </tr>
                    <tr class="row">
                        <td className="col">JobStartDate=</td>
                        <td className="col"><input onClick={this.JobStartDate} placeholder={JobStartDate}/></td>
                    </tr>
                    </tbody>
                </table>
                <table>
                <tr>
                    <td>
                    <button id="btn2" className="btn btn-primary" onClick={()=>{this.Check()}}>Go Back</button>
                    </td>
                    <td>
                    <button onClick={()=>{this.AddDetails(FirstName,LastName,Salary,Email,JobStartDate)}} id="btn3" class="btn btn-primary">Add Details</button>
                    </td>
                </tr>        
                </table>
                </div>
        );
    }
}