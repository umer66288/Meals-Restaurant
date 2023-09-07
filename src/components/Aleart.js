import React, {useContext} from 'react';
import Alert from 'react-bootstrap/Alert';
import { AppContext } from '../context/Context';

export default function Aleart() {
  const context = useContext(AppContext)
  const {aleart} = context;
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        aleart && <Alert variant={aleart.type} className='m-0 position-fixed rounded-5'>
            <strong>{capitalize(aleart.type)}</strong>:{aleart.msg}
            {/* <strong>{successfully}</strong> : {aleart.msg} */}
        </Alert>
    )
}
