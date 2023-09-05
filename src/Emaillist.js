import React from 'react';
import './css/emaillist.css';
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';

const Emaillist = () => {
  return (
    <div className='emaillist'>
        <EmailListSetting />
        <Emailtype />
        <Emailbody name="Abhishek kumar" subject='Testing mail' message='This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail This is first hardcoded mail' time='3:30 PM'/>
    </div>
  )
}

export default Emaillist;