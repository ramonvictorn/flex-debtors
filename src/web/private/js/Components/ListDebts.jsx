import React,{Component} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import {updateDebtorsList} from '../Actions/debtors.js';
import InputActions from './InputActions.jsx';
class ListDebts extends Component{
    constructor(){
        super();
    }
    delete(id){
        console.log('delete ', id)
    }
    render(){
        console.log('listDebts render',this.props.debtorsList);
        let lines = [];
        let notFound = '';
        if(this.props.debtorsList){
            this.props.debtorsList.forEach(element => {
                console.log('looping')
                lines.push(
                    <tr key={element.idDebtor}>
                        <td>{element.reason}</td>
                        <td>{element.value}</td>
                        <td>{new Date(element.dateDebtor).toDateString("yyyy-MM-dd")}</td>
                        <td>editar <h2 onClick={()=>this.delete(element.idDebtor)}>delete</h2></td>
                    </tr>
                )
            });
        }
        lines.length == 0 ? notFound = "Nenhuma divída encontrada" : '';
        return(
            <React.Fragment>
                <table border="1">
                    <tbody>
                        <tr className={'headTable'}>
                            <td>Motivo</td>
                            <td>Valor </td>
                            <td>Data</td>
                            <td>Ações</td>
                            <td onClick={()=>{this.addNewRegistry()}}>Novo registro</td></tr>
                        {lines}
                        <InputActions></InputActions>

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
});

const mapDispatchToProps = dispatch =>({
    _updateDebtorsList: debtors => dispatch(updateDebtorsList(debtors)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ListDebts);