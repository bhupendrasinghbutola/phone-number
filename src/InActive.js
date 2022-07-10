import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input/input'

function InActive() {

  const [value, setValue] = useState()
  
  return (
    
    <PhoneInput
      country="US"
      value={value}
      onChange={setValue} />
  )
}
export default InActive;