import React,{useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Active() {
   
  
    const [value, setValue] = useState()
    return (
      <PhoneInput
       

        placeholder="Enter phone number"
        
        value={value}
        onChange={setValue}/>
    )
  }
  export default Active;

// import React from 'react'
// import { Dropdown,ButtonToolbar,Button } from 'rsuite';

// const Active = () => {
//   return (
//     <div className='page'>
//       <div className='container'>
//         <div className='tel-box'>
//           <div className='select-box'>
//             <img src='' alt='' id='img' className='flag-img'/>
//             <select className='country_list'>
//             <option value="" hidden>Select Country</option> 
//                         <option data-countryCode="AF" value="93">Afghanistan (+93)</option>
//                         <option data-countryCode="AL" value="355">Albania (+355)</option>
//                         <option data-countryCode="DZ" value="213">Algeria (+213)</option>
//                         <option data-countryCode="AS" value="1684">American Samoa (+1684)</option>
//                         <option data-countryCode="AD" value="376">Andorra (+376)</option>
//                         <option data-countryCode="AO" value="244">Angola (+244)</option>
//                         <option data-countryCode="HT" value="509">Haiti (+509)</option>
//                         <option data-countryCode="HN" value="504">Honduras (+504)</option>
//                         <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
//                         <option data-countryCode="HU" value="36">Hungary (+36)</option>
//                         <option data-countryCode="IS" value="354">Iceland (+354)</option>
//                         <option data-countryCode="IN" value="91">India (+91)</option>
//                         <option data-countryCode="ID" value="62">Indonesia (+62)</option>
//                         <option data-countryCode="IR" value="98">Iran (+98)</option>
//                         <option data-countryCode="MQ" value="596">Martinique (+596)</option>
//                         <option data-countryCode="MR" value="222">Mauritania (+222)</option>
//                         <option data-countryCode="YT" value="269">Mayotte (+269)</option>
//                         <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
//                         <option data-countryCode="MN" value="95">Myanmar (+95)</option>
//                         <option data-countryCode="NA" value="264">Namibia (+264)</option>
//                         <option data-countryCode="NR" value="674">Nauru (+674)</option>
//                         <option data-countryCode="NP" value="977">Nepal (+977)</option>
//                         <option data-countryCode="RO" value="40">Romania (+40)</option>
//                         <option data-countryCode="RU" value="7">Russia (+7)</option>
//                         <option data-countryCode="RW" value="250">Rwanda (+250)</option>
//                         <option data-countryCode="ZA" value="27">South Africa (+27)</option>  
//                         <option data-countryCode="KR" value="82">South Korea (+82)</option>
//                         <option data-countryCode="SS" value="211">South Sudan (+211)</option>
//                         <option data-countryCode="ES" value="34">Spain (+34)</option>
//                         <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
//                         <option data-countryCode="UG" value="256">Uganda (+256)</option>
//                         <option data-countryCode="UA" value="380">Ukraine (+380)</option>
//                         <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
//                         <option data-countryCode="GB" value="44">United Kingdom (+44)</option>
//                         <option data-countryCode="US" value="1">United States (+1)</option>
                       
//                      <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
//                       </select>
//  </div>
//                  <input type="tel" className="tel"/>
//         </div>
//         <div className='output'>Phone no:
//         <span className='result'></span>
//         </div>

//       </div>

      

//     </div>
//   )
// }

// export default Active