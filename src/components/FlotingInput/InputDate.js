import DatePicker from "react-datepicker";
import classname from 'classnames'

const InputDatePicker = (props) => {
    return (
        <div className={classname("input-wrapper-datepicker mb-3", { [props.parentClass]: props.parentClass })}>
            <label for="start-time" class="form-label">{props.label}</label>
            <DatePicker
                selected={props.selected}
                onChange={props.onChange}
                showTimeSelect={props.showTimeSelect ? props.showTimeSelect : false}
                dateFormat={props.dateFormat}
                className={props.className}
            />
        </div>
    )
}

export default InputDatePicker;
