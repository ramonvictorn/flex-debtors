import React,{Component} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { updateUsersList,setUserSelected } from '../Actions/users.js';
import {updateDebtorsList} from '../Actions/debtors.js';

class ListClients extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.getUsers()
    }
    getUsers(){
        let me = this;
        $.ajax({
            url: "/users",
            type:"GET",
          }).done(function(ret) {
            me.props._updateUsersList(ret.data)
          });
    }
    handleChange(selectedOption){
        this.props._setUserSelected(selectedOption);
        this.getBebts(selectedOption.id);
        
    };
    getBebts(id){
        let me = this;
        $.ajax({
            url: "/debts",
            type:"GET",
			data: {idUser:id}
          }).done(function(ret) {
            me.props._updateDebtorsList(ret.data)
          });
    }
    render(){
        let options = [];
        if(this.props.usersList != null){
            this.props.usersList.forEach(element => {
                options.push({label:element.name,id:element.id})
            });
        }
        return(
            <React.Fragment>
                Selectione um cliente:
                <Select
                    placeholder={'Selecione um cliente'}
                    value={this.props.userSelected}
                    onChange={this.handleChange}
                    options={options}
                    styles={{ menu: base => ({ ...base, position: 'relative' }) }}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#FDBA27',
                          neutral0:"#fffff",
                          primary: '#fffff',
                          dangerLight:'red'
                        },
                    })}
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    usersList: state.usersReducer.usersList,
    userSelected: state.usersReducer.userSelected,
});

const mapDispatchToProps = dispatch =>({
    _updateUsersList: users => dispatch(updateUsersList(users)),
    _setUserSelected: user => dispatch(setUserSelected(user)),
    _updateDebtorsList: debtors => dispatch(updateDebtorsList(debtors)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListClients);