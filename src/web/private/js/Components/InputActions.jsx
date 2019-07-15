import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    toggleRowEdit,
    updateDebtorsList,
    updateTableInputValues,
    setTableInputValues,
} from '../Actions/debtors.js';

class InputActions extends Component{
    constructor(){
        super();
        this.cadastrar = this.cadastrar.bind(this);
        this.updateValues = this.updateValues.bind(this);
    }
    cadastrar(){
        let data ={
            idUser: this.props.userSelected.id,
            reason: this.props.inputValues.reason,
            value: this.props.inputValues.value,
            dateDebtor:this.props.inputValues.dateDebtor,
        }
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
    updateValues(value,param){
        let dataParams = {
            input: param,
            value: value,
        };
        this.props._updateTableInputValues(dataParams)
    }
    render(){
        console.log('InputAction render ', this.props)
        return(
            <tr>
                <td>{<input className={'inputCustom'}  onChange={(e)=>{this.updateValues(e.target.value,'reason')}} type="text" placeholder="Qual o motivo da divída?" value={this.props.inputValues.reason}></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.updateValues(e.target.value,'value')}} type="number" placeholder="Qual foi o valor?" value={this.props.inputValues.value}></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.updateValues(e.target.value,'dateDebtor')}} type="date" placeholder="Quando foi?" value={this.props.inputValues.dateDebtor}></input>}</td>
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
    rowEdit : state.debtorsReducer.rowEdit,
    inputValues: state.debtorsReducer.inputValues,
});

const mapDispatchToProps = dispatch =>({
    _toggleRowEdit: () => dispatch(toggleRowEdit()),
    _updateDebtorsList: list => dispatch(updateDebtorsList(list)),
    _updateTableInputValues : objectValues => dispatch(updateTableInputValues(objectValues)),
    _setTableInputValues : objectValues => dispatch(setTableInputValues(objectValues)),
});

export default connect(mapStateToProps,mapDispatchToProps)(InputActions);