import { useState,useMemo } from "react";
import {selfIncreateID} from "./../utils";
const CHECKBOXTAG = "checkbox-tag-";
function Checkbox(props) {
	const { defaultChecked = false, disabled = false, onChange } = props;
  const nameOrId=useMemo(()=>selfIncreateID(CHECKBOXTAG),[]);
	return (
		<div className='checkbox'>
			<label htmlFor={nameOrId}>
				<input
					name={nameOrId}
					id={nameOrId}
					type='checkbox'
					defaultChecked={defaultChecked}
					disabled={disabled}
					onChange={onChange}
				/>
				{props.children}
			</label>
		</div>
	);
}

function CheckboxGroup(props) {
	//props
	const { options, defaultValue = [], onChange } = props;
	//state
	const [values, setValues] = useState(defaultValue);
	const isItemChecked = value => values.includes(value);
	const setItemValue = (ev, item) => {
		const val = ev.target.checked;
		let newValus = [];
		if (val) {
			newValus = [...new Set([...values, item.value])];
		} else {
			newValus = values.filter(val => val !== item.value);
		}
		setValues(newValus);
		onChange(values);
	};
	try {
		//render
		if (options.length) {
			return options.map(item => {
				return (
					<Checkbox
						key={item.value}
						defaultChecked={isItemChecked(item.value)}
						disabled={item.disabled}
						onChange={ev => setItemValue(ev, item)}>
						{item.label}
					</Checkbox>
				);
			});
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
}

Checkbox.Group = CheckboxGroup;
export default Checkbox;
