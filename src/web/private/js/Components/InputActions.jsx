import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    toggleRowEdit,
    updateDebtorsList,
} from '../Actions/debtors.js';

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
        // console.log('cadastrar', this.props.userSelected);
        let data ={
            idUser: this.props.userSelected.id,
            reason: this.state.reason,
            value: this.state.value,
            dateDebtor:this.state.dateDebtor,
        }
        // console.log('antes do send ', data.dateDebtor)
        let me = this;
        $.ajax({
            url: "/debts",
            type:"POST",
			data: data,
          }).done(function(ret) {
            //   console.log('ret ', ret)
              me.props._updateDebtorsList(me.props.debtorsList.concat(ret.data))
              me.props._toggleRowEdit();
          });
    }
    render(){
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
// export default InputActions;
const mapStateToProps = state => ({
    userSelected: state.usersReducer.userSelected,
    // usersList: state.usersReducer.usersList,
    debtorsList: state.debtorsReducer.debtorsList,
    rowEdit : state.debtorsReducer.rowEdit
});

const mapDispatchToProps = dispatch =>({
    _toggleRowEdit: () => dispatch(toggleRowEdit()),
    _updateDebtorsList: list => dispatch(updateDebtorsList(list))
});

export default connect(mapStateToProps,mapDispatchToProps)(InputActions);