import React, {Component} from 'react';


class InputActions extends Component{
    constructor(){
        super();
        this.state = {
            reason : '',
            value : '',
            dateDebtor : '',
        }
        this.cadastrar = this.cadastrar.bind(this);
    }
    cadastrar(){
        console.log('cadastrar');
        let data ={
            idUser: 1,
            reason: this.state.reason,
            value: this.state.value,
            dateDebtor:this.state.dateDebtor,
        }
        let me = this;
        $.ajax({
            url: "/debts",
            type:"POST",
			data: data,
          }).done(function(ret) {
            // me.props._updateDebtorsList(ret.data)
            console.log('ret ', ret)
          });
    }
    render(){
        console.log("render Input ")
        return(
            <tr>
                <td>{<input className={'inputCustom'}  onChange={(e)=>{this.setState({reason:e.target.value})}} type="text" placeholder="Qual o motivo da divída?"></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.setState({value:e.target.value})}} type="number" placeholder="Qual foi o valor?"></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.setState({dateDebtor:e.target.value})}} type="date" placeholder="Quando foi?"></input>}</td>
                <td></td>
                <td onClick={this.cadastrar}>Cadastrar</td>
            </tr>
        )
    }  
}
export default InputActions;