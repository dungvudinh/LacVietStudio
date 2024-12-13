import PropTypes from "prop-types";
import {memo} from 'react';
function PasswordHint({numCharacter}) {
    
    return ( 
        <p className="password-text" style={{height:'20px', display:'flex', alignItems:'center'}}>
            {Array.from({ length: numCharacter }, (_, index) => (
                <span key={index} className="dot" style={{display:'inline-block', width:'4px', height:'4px', borderRadius:'2px', marginRight:'4px', backgroundColor:'rgb(53, 53, 53)'}}></span>
            ))}
        </p>
     );
}

PasswordHint.propTypes = {
    numCharacter:PropTypes.number
}
export default memo(PasswordHint);