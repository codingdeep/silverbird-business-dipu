import { useState } from 'react';
import classname from 'classnames'

const FlotingInput = (props) => {
    const [value, setValue] = useState(false);

    const handleOnFocus = (e) => {
        setValue(true)
    }

    const handleOnBlur = (e) => {
        setValue(false)
    }


    return (
        <div className={classname("input-wrapper mb-3", { [props.parentClass]: props.parentClass })}>
            {/* <div className={parentClass}> */}
            <label for={props.id}
                className={classname("form-label", { active: value || props.value || props.type === 'select' })}>
                {props.label}
            </label>

            {
                props.type === 'select' ?

                    <select className='form-control form-select' onChange={props.onChange} value={props.value} name={props.name}>
                        {
                            props.options.map(e => {
                                return <option value={e}>{e}</option>
                            })
                        }

                        {/* <option value="2">2</option>
                        <option value="3">3</option> */}
                    </select>
                    :
                    props.type === 'textarea' ?
                        <textarea
                            type={props.type}
                            class="form-control"
                            id={props.id}
                            onChange={props.onChange}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            value={props.value}
                            name={props.name}
                            cols={props.cols}
                            rows={props.rows}
                        ></textarea>
                        :
                        <input
                            type={props.type}
                            class="form-control"
                            id={props.id}
                            onChange={props.onChange}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            value={props.value}
                            name={props.name}
                        />
            }



        </div>
    )
};

export default FlotingInput;