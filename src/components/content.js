import React from 'react';
import ReactDOM from "react-dom";
import './content.css';

const Content=() =>{
  return(
      <div className='tble'>
        <h1 className='table'>Table</h1>
        <table>
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>City</th> 
            <th>Department</th>
            <th>Pass out</th>
            </tr>
            <tr>
            <td>1</td>
            <td>Nisha</td>
            <td>Pune</td>
            <td>CSE</td>
            <td>2025</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Neenu</td>
            <td>Wayanad</td>
            <td>FT</td>
            <td>2025</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Nadiya</td>
            <td>Calicut</td>
            <td>Civil</td>
            <td>2025</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Sharmila</td>
            <td>Palakkad</td>
            <td>CSE</td>
            <td>2025</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Zaina</td>
            <td>Thrissur</td>
            <td>FT</td>
            <td>2025</td>
            </tr>
        </table>
        <h1 className='form'>Form</h1>
        <div className='frm'>
          <form>
            <label>First Name : </label>
            <input type='text'/>
            <label>Last Name : </label>
            <input type='text'/>
            <label>Password : </label>
            <input type='text'/><br></br><br></br>
            <button className='btn-1'>Submit</button>
            <button className='btn-2'>Cancel</button>
          </form>
        </div>
      </div>
  )
}
ReactDOM.render(<Content/>,document.getElementById('root'));

export default Content;