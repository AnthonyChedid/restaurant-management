import React from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function Search() {

    // onTextChange = (e) =>{
    //     this.setState({[e.target.restaurantName]: e.target.value});
    // }

    return (
        <div>
            <TextField 
            name="searchText"
            //value={posts.searchText}
            //onChange={onTextChange}
            floatingLabelText="Search Restaurant"
            fullWidth={true}
            />
            <br/>
            <SelectField
                name="type"
                floatingLabelText="Type"
                //value={this.state.amount}
                //onChange={this.onAmountChange}
                    >
                <MenuItem value={1} primaryText="Lebanese" />
                <MenuItem value={2} primaryText="Japanese" />
                <MenuItem value={3} primaryText="American" />
                <MenuItem value={4} primaryText="Italian" />
            </SelectField>

        </div>
    )
}
