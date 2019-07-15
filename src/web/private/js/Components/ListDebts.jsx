import React,{Component} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import {
    updateDebtorsList,
    toggleRowEdit,
    updateTableInputValues,
    setTableInputValues,
} from '../Actions/debtors.js';
import InputActions from './InputActions.jsx';
class ListDebts extends Component{
    constructor(){
        super();
        this.state = {
            edit : false,
        }
        this.addNewRegistry = this.addNewRegistry.bind(this);
        this.removeDebtArray = this.removeDebtArray.bind(this);
        this.delete = this.delete.bind(this);
        this.editDebt = this.editDebt.bind(this);
    }
    delete(id){
        let me = this;
        console.log('array Before ajax', this.props.debtorsList);
        console.log('delete ', id);
        let data = {
            idDebtor : id,
        }
        $.ajax({
            url: "/debts",
            type:"DELETE",
			data: data,
          }).done(function(ret) {
              console.log('ret do delete ', ret)
              me.removeDebtArray(ret.data.idDebtor)
            //   me.props._updateDebtorsList(me.props.debtorsList.concat(ret.data))
            //   me.props._toggleRowEdit();
          });
    }
    editDebt(idDebt,index){
        console.log('editDebt ', idDebt, 'e index ->', index);
        console.log('com essas info', this.props.debtorsList[index])
        this.setState({edit:idDebt})
        let dataParams = {
            reason : this.props.debtorsList[index].reason,
            value: this.props.debtorsList[index].value, 
            dateDebtor: this.props.debtorsList[index].dateDebtor.split('T')[0],
        };
        this.props._setTableInputValues(dataParams);
        // this.props._updateTableInputValues(dataParams)

    }
    removeDebtArray(idDebt){
        console.log('removeDebtArray -> idDebt', idDebt)
        let newArray = [];
        console.log('array Before', this.props.debtorsList.length);
        this.props.debtorsList.forEach((element,index) => {
            console.log('looping remove',element)
            if(element.idDebtor == idDebt){
                console.log('deu true ', index);
                newArray = this.props.debtorsList.splice(index+1);
            }
        });
        console.log('array after', newArray);
        this.props._updateDebtorsList(newArray);
    }
    addNewRegistry(){
        console.log('addNewRegistry', this.props);
        this.props._toggleRowEdit();
    }
    render(){
        console.log('listDebts render',this.props.debtorsList);
        let lines = [];
        let notFound = '';
        if(this.props.debtorsList){
            this.props.debtorsList.forEach((element,index) => {
                // console.log('looping, element ->', element.idDebtor, 'edit state ', this.state.edit);
                lines.push(
                    this.state.edit == element.idDebtor 
                    ?   <InputActions key={element.idDebtor}></InputActions>
                    :    <tr key={element.idDebtor} className={'tableLine'}>
                            <td>{element.reason}</td>
                            <td>{element.value}</td>
                            <td>{new Date(element.dateDebtor).toDateString("yyyy-MM-dd")}</td>
                            <td><h2 onClick={()=>this.editDebt(element.idDebtor,index)}>editar</h2><h2 onClick={()=>this.delete(element.idDebtor)}>delete</h2></td>
                        </tr>
                )
            });
        }
        lines.length == 0 ? notFound = "Nenhuma divída encontrada" : '';
        let inputAc = this.props.rowEdit ? <InputActions></InputActions> : <tr></tr>
        return(
            <React.Fragment>
                <table border="1" className={'tableStyle'}>
                    <tbody>
                        <tr className={'headTable'}>
                            <td>Motivo</td>
                            <td>Valor </td>
                            <td>Data</td>
                            <td>Ações</td>
                            <td onClick={()=>{this.addNewRegistry()}}>Novo registro</td></tr>
                        {lines}
                        {inputAc}

                    </tbody>
                </table>
                {notFound}
            </React.Fragment>
        )
    }
}

// updateValues(value,param){
//     let dataParams = {
//         input : param,
//         value: value
//     };
//     this.props._updateTableInputValues(dataParams)
// }

const mapStateToProps = state => ({
    userSelected: state.usersReducer.userSelected,
    usersList: state.usersReducer.usersList,
    debtorsList: state.debtorsReducer.debtorsList,
    rowEdit : state.debtorsReducer.rowEdit,
    inputValues: state.debtorsReducer.inputValues,
});

const mapDispatchToProps = dispatch =>({
    _updateDebtorsList: debtors => dispatch(updateDebtorsList(debtors)),
    _toggleRowEdit: () => dispatch(toggleRowEdit()),
    _updateTableInputValues : objectValues => dispatch(updateTableInputValues(objectValues)),
    _setTableInputValues : objectValues => dispatch(setTableInputValues(objectValues)),
});
export default connect(mapStateToProps,mapDispatchToProps)(ListDebts);