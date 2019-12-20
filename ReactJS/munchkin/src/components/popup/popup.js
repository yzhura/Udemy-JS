import React from 'react';
import './popup.scss';

const Popup = (props) => {
    return (
        <div className="alert alert-dismissible alert-danger">
            <button onClick={props.closePopup} type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>{props.errorMsg}</strong>
        </div>
    );
}

export default Popup;
