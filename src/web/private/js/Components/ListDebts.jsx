import React,{Component} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import {
    updateDebtorsList,
    toggleRowEdit,
    updateTableInputValues,
    setTableInputValues,
    setRowEdit,
} from '../Actions/debtors.js';
import InputActions from './InputActions.jsx';
class ListDebts extends Component{
    constructor(){
        super();
        this.addNewRegistry = this.addNewRegistry.bind(this);
        this.removeDebtArray = this.removeDebtArray.bind(this);
        this.delete = this.delete.bind(this);
        this.editDebt = this.editDebt.bind(this);
    }
    delete(id){
        let me = this;
        // console.log('array Before ajax', this.props.debtorsList);
        // console.log('delete ', id);
        let data = {
            idDebtor : id,
        }
        $.ajax({
            url: "/debts",
            type:"DELETE",
			data: data,
          }).done(function(ret) {
            //   console.log('ret do delete ', ret)
              me.removeDebtArray(ret.data.idDebtor)
            //   me.props._updateDebtorsList(me.props.debtorsList.concat(ret.data))
            //   me.props._toggleRowEdit();
          });
    }
    editDebt(idDebt,index){
        // console.log('editDebt ', idDebt, 'e index ->', index);
        // console.log('com essas info', this.props.debtorsList[index])
        this.setState({edit:idDebt})
        let dataParams = {
            reason : this.props.debtorsList[index].reason,
            value: this.props.debtorsList[index].value, 
            dateDebtor: this.props.debtorsList[index].dateDebtor.split('T')[0],
        };
        this.props._setTableInputValues(dataParams);
        // this.props._updateTableInputValues(dataParams)
        this.props._setRowEdit(idDebt);

    }
    removeDebtArray(idDebt){
        // console.log('removeDebtArray -> idDebt', idDebt)
        let newArray = [];
        let tempArray = this.props.debtorsList.slice(0);
    
        // console.log('array Before', JSON.stringify(tempArray));
        this.props.debtorsList.forEach((element,index) => {
            // console.log('looping remove',element.idDebtor , 'params é' , idDebt)
            if(element.idDebtor == idDebt){
                // console.log('deu true ', index, tempArray.length);
                // newArray = this.props.debtorsList.splice(index+1);
                tempArray.splice(index,1)
            }
        });
        // console.log('array after', JSON.stringify(tempArray));
        this.props._updateDebtorsList(tempArray);
    }
    addNewRegistry(){
        // console.log('addNewRegistry', this.props);
        this.props._toggleRowEdit();
    }
    render(){
        console.log('listDebts render - list',this.props.debtorsList);
        let lines = [];
        let notFound = '';
        if(this.props.debtorsList){
            this.props.debtorsList.forEach((element,index) => {
                // console.log('looping, element ->', element.idDebtor, 'edit props ', this.props.idEdit);
                lines.push(
                    this.props.idEdit == element.idDebtor 
                    ?   <InputActions key={element.idDebtor}></InputActions>
                    :    <tr key={element.idDebtor} className={'tableLine'}>
                            <td>{element.reason}</td>
                            <td>{element.value}</td>
                            <td>{new Date(element.dateDebtor).toDateString("yyyy-MM-dd")}</td>
                            <td>
                                <h2 onClick={()=>this.editDebt(element.idDebtor,index)}>
                                    <Icon>border_color</Icon>
                                </h2>
                                <h2 onClick={()=>this.delete(element.idDebtor)}>
                                    <Icon>delete</Icon>
                                </h2>
                            </td>
                        </tr>
                )
            });
        }
        lines.length == 0 ? notFound = "Nenhuma divída encontrada" : '';
        let inputAc = this.props.rowEdit ? <InputActions></InputActions> : <tr></tr>
        let disable = this.props.idEdit != undefined ? 'true' : 'false';
        console.log('idEdit ', this.props.idEdit)
        let btNewClass = this.props.idEdit != undefined ? 'editing' : 'notEding2';
        let btNewTxt = "Novo Cadastro";
        return(
            <React.Fragment>
                <table border="1" className={'tableStyle'}>
                    <tbody>
                        <tr className={'headTable'}>
                            <td>Motivo</td>
                            <td>Valor </td>
                            <td>Data</td>
                            <td>Ações</td>
                            <td  onClick={()=>{this.addNewRegistry()}}><h2 className={btNewClass}>{btNewTxt}</h2></td></tr>
                        {lines}
                        {inputAc}

                    </tbody>
                </table>
                {notFound}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    userSelected: state.usersReducer.userSelected,
    usersList: state.usersReducer.usersList,
    debtorsList: state.debtorsReducer.debtorsList,
    rowEdit : state.debtorsReducer.rowEdit,
    inputValues: state.debtorsReducer.inputValues,
    idEdit: state.debtorsReducer.idEdit
});

const mapDispatchToProps = dispatch =>({
    _updateDebtorsList: debtors => dispatch(updateDebtorsList(debtors)),
    _toggleRowEdit: () => dispatch(toggleRowEdit()),
    _updateTableInputValues : objectValues => dispatch(updateTableInputValues(objectValues)),
    _setTableInputValues : objectValues => dispatch(setTableInputValues(objectValues)),
    _setRowEdit : id => dispatch(setRowEdit(id)),
});
export default connect(mapStateToProps,mapDispatchToProps)(ListDebts);