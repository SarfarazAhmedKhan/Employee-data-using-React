import React, { Component } from 'react';
import './App.css';
import Login from './Form/Login.js';
import Table from './Form/Table.js';
import Details from './Form/Details.js';
import './css/bootstrap.min.css';
import swal from 'sweetalert';

class App extends Component {
  
    constructor()
    {
      super();
      this.state={
        array:[],
        admin:'admin@gmail.com',
        password:'admin',
        u1:'',
        p1:'',
        login:false,
        details:false,
        FirstName:'',
        LastName:'',
        Salary:'',
        Email:'',
        JobStartDate:'JobstartDate...',
        fn:''
      };
      this.Verify=this.Verify.bind(this);
      this.Detail=this.Detail.bind(this);
      this.Info=this.Info.bind(this);
    }
    Verify(user,pass){
     if(user=='admin@gmail.com' && pass=='admin')
      {
        this.setState({
          login:true
        });
        swal('Access','Sorry','success')
      }
      else
      {
        swal('NotAccess','Sorry','error')
      }
    }
    Detail(get){
      this.setState({
        details:get
      });
    }
    Info(f,l,s,e,j){
      const {array}=this.state;
      array.push({
        FirstName:f,LastName:l,Salary:s,Email:e,JobStartDate:j
      });
      this.setState({
        array
      });
    }
    render() {
      const {login,details,array}=this.state;
      return (
        <div className="App">
          <header className="App-header">
            {!login && <Login Login={this.Verify}/>}
            {login && !details && <Table taking={array} Information={this.Detail}/>}
            {login && details && <Details Information={this.Detail} Info={this.Info}/>}
          </header>
        </div>
      );
    }
}
export default App;