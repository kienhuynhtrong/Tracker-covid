import React from 'react'
import { FormControl, InputLabel, FormHelperText, NativeSelect } from '@mui/material'


const CountrySelector = ({ countries, handleOnChange }) => {

  return (
    <FormControl>
      <InputLabel shrink htmlFor='country-selector'>Quốc Gia</InputLabel>
      <NativeSelect
        onChange={handleOnChange}
      >
        {countries.map(({ Country, ISO2 }) => (
          <option key={ISO2} value={ISO2.toLowerCase()}>
            {Country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText id="my-helper-text">Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  )
}
export default CountrySelector