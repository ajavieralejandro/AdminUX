import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './select.style.scss';


const SelectLabel = ({title}) => {

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
    setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return(

        <div className="wrapSelect">
     
      <FormControl className="selectForm">
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
        className="selectLabel"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
    );


}

export default SelectLabel;