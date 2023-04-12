const Validation = (state)=> {
    let errors = {}

    // if(!state.name) {
    //     errors.name = 'Username Required'
    // }
    // else if(state.name.length < 5) {
    //     errors.name = 'Username must be more than 5 characters'
    // }
    if(!state.pass) {
        errors.pass = 'password Required'
    }
    else if(state.pass.length < 9) {
        errors.pass = 'password must be more than 5 characters'
    } 
    if(state.cpass !== state.pass) {
        errors.cpass = 'Password does not match'
    }
    return errors

}

export default Validation;