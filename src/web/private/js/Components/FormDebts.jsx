import React,{Component} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

class FormDebts extends Component {
    constructor(){
        super();
    }
    render(){
        console.log('FormDebts render ');
        let disable = this.props.userSelected != null ? false : true;
        return(
            <React.Fragment>
                <form>
                    <InputLabel children={'Motivo'}></InputLabel>
                    <Input disabled={disable} className={'input'}></Input>
                    <InputLabel children={'Valor'}></InputLabel>
                    <Input  disabled={disable} type={'number'} className={'input'} ></Input>
                    <InputLabel children={'Data'}></InputLabel>
                    <TextField
                        disabled={disable}
                        id="date"
                        // label="Birthday"
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                        // className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                <Button disabled={disable} variant="contained" color="primary">
                    Cadastrar dívida
                </Button>
                
            </React.Fragment>
        )
    }
}
// export default FormDebts;

const mapStateToProps = state => ({
    // usersList: state.usersReducer.usersList,
    userSelected: state.usersReducer.userSelected,
});

// const mapDispatchToProps = dispatch =>({
//     _updateUsersList: users => dispatch(updateUsersList(users)),
//     _setUserSelected: user => dispatch(setUserSelected(user))
// });

export default connect(mapStateToProps)(FormDebts);