import React,{Component} from 'react';

import ListClients from '../Components/ListClients.jsx';
import FormDebts from '../Components/FormDebts.jsx';
import ListDebts from '../Components/ListDebts.jsx';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(){
        super();
    }
    render(){
        console.log('render Home ');
        let ListDebtsComponent = <ListDebts></ListDebts>
        this.props.userSelected == null ? ListDebtsComponent = "Selecione um cliente para visualizar suas divídas" : '';
        return(
            <React.Fragment>
                {/* <Container maxWidth="sm"> */}
                    <ListClients></ListClients>
                    {/* <FormDebts></FormDebts> */}
                    {ListDebtsComponent}
                {/* </Container> */}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    // usersList: state.usersReducer.usersList,
    userSelected: state.usersReducer.userSelected,
});

const mapDispatchToProps = dispatch =>({
    // _updateUsersList: users => dispatch(updateUsersList(users)),
    // _setUserSelected: user => dispatch(setUserSelected(user)),
    // _updateDebtorsList: debtors => dispatch(updateDebtorsList(debtors)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);