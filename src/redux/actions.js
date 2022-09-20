
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URl = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca'

export const getCities = ()=>{
    try {
        return async  dispatch => {
           const result = await fetch( API_URl, {

            method:'GET',
            headers:{
                'Content-Type': 'appliation/jon',

            },
            // body:JSON.stringify({
            //     par1:' value ',
            //     par2:' value ',
            // })

           });
           const json = await result.json();
           if (json) {
            dispatch({
                type: GET_CITIES,
                payload: json
            })
           } else {
            console.log('Unable to fitching Data');
           }

         }
    } catch (error) {
        console.log(error);
        
    }
}

export const setName=name => dispatch =>{
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
}
export const setAge=age => dispatch =>{
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
}
export const increaseAge=age => dispatch =>{
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
}

