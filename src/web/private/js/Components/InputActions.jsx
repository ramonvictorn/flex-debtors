import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    toggleRowEdit,
    updateDebtorsList,
    updateTableInputValues,
    setTableInputValues,
    setRowEdit,
} from '../Actions/debtors.js';

class InputActions extends Component{
    constructor(){
        super();
        this.cadastrar = this.cadastrar.bind(this);
        this.updateValuesState = this.updateValuesState.bind(this);
        this.updateDataRow = this.updateDataRow.bind(this);
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
              me.props._updateDebtorsList(me.props.debtorsList.concat(ret.data))
              me.props._toggleRowEdit();
          });
    }
    updateValuesState(value,param){
        let dataParams = {
            input: param,
            value: value,
        };
        this.props._updateTableInputValues(dataParams)
    }
    updateDataRow(){
        let data ={
            idDebtor: this.props.idEdit,
            reason: this.props.inputValues.reason,
            value: this.props.inputValues.value,
            dateDebtor:this.props.inputValues.dateDebtor,
        }
        let OldArray = this.props.debtorsList.slice(0);
        let me = this;
        $.ajax({
            url: "/debts",
            type:"PUT",
			data: data,
          }).done(function(ret) {
              me.props.debtorsList.forEach((element,index) => {
                if(element.idDebtor == ret.data.idDebtor){
                    OldArray[index] = ret.data;
                }
              });
              me.props._setRowEdit(undefined);
              me.props._updateDebtorsList(OldArray);
          });
    }
    render(){
        return(
            <tr>
                <td>{<input className={'inputCustom'}  onChange={(e)=>{this.updateValuesState(e.target.value,'reason')}} type="text" placeholder="Qual o motivo da divída?" value={this.props.inputValues.reason}></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.updateValuesState(e.target.value,'value')}} type="number" placeholder="Qual foi o valor?" value={this.props.inputValues.value}></input>}</td>
                <td>{<input className={'inputCustom'} onChange={(e)=>{this.updateValuesState(e.target.value,'dateDebtor')}} type="date" placeholder="Quando foi?" value={this.props.inputValues.dateDebtor}></input>}</td>
                <td></td>
                <td> {this.props.idEdit ? <h2 onClick={this.updateDataRow}>Salvar</h2> : <h2 onClick={this.cadastrar}>CADASTRAR</h2>}</td>
            </tr>
        )
    }  
}

const mapStateToProps = state => ({
    userSelected: state.usersReducer.userSelected,
    debtorsList: state.debtorsReducer.debtorsList,
    rowEdit : state.debtorsReducer.rowEdit,
    inputValues: state.debtorsReducer.inputValues,
    idEdit: state.debtorsReducer.idEdit
});

const mapDispatchToProps = dispatch =>({
    _toggleRowEdit: () => dispatch(toggleRowEdit()),
    _updateDebtorsList: list => dispatch(updateDebtorsList(list)),
    _updateTableInputValues : objectValues => dispatch(updateTableInputValues(objectValues)),
    _setTableInputValues : objectValues => dispatch(setTableInputValues(objectValues)),
    _setRowEdit : id => dispatch(setRowEdit(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(InputActions);