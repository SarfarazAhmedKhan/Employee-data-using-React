import { Component } from "react";

class Appp extends Component{
  constructor()
  { 
    super();
    this.state = {
      Category: [],
      Force:[],
      SelectCategory:'',
      SelectForce:''
    }
    this.SelectCategory=this.SelectCategory.bind(this);
    this.SelectForce=this.SelectForce.bind(this);
    this.Search=this.Search.bind(this);
  }
  SelectCategory(Category){
    this.setState({
      SelectCategory:Category.target.value
    });
  }
  SelectForce(Force){
    this.setState({
      SelectForce:Force.target.value
    });
  }
  Search(){
    const {SelectCategory,SelectForce}=this.state;
    if(!SelectCategory || !SelectForce)
    {
      swal('Access','Nice Job','Success')
    }
    myFunctions.Crimes(SelectCategory,SelectForce).then(res=>console.log(res)); 
  }
}