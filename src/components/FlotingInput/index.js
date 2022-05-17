import { useState } from 'react';
import classname from 'classnames'

const FlotingInput = (props) => {
    const [value, setValue] = useState(false);

    console.log(props.onChange);

    const handleOnFocus = (e) => {
        setValue(true)
    }

    const handleOnBlur = (e) => {
        setValue(false)
    }

    const parentClass = props.parentClass ? "input-wrapper mb-3 " + props.parentClass : "input-wrapper mb-3";


    return (
        <div className={classname("input-wrapper mb-3", { [props.parentClass]: props.parentClass })}>
            {/* <div className={parentClass}> */}
            <label for={props.id} className={classname("form-label", { active: value || props.value })}>{props.label}</label>
            <input type="number"
                class="form-control"
                id={props.id}
                onChange={props.onChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={props.value}
                name={props.name}

            />
        </div>
    )
};

export default FlotingInput;