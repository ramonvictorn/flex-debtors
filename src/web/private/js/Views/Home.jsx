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
        let ListDebtsComponent = <ListDebts></ListDebts>
        this.props.userSelected == null ? ListDebtsComponent = "Selecione um cliente para visualizar suas divídas" : '';
        return(
            <React.Fragment>
                    <ListClients></ListClients>
                    {ListDebtsComponent}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    userSelected: state.usersReducer.userSelected,
});


export default connect(mapStateToProps)(Home);