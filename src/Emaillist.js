import React, { useEffect, useState } from 'react';
import './css/emaillist.css';
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase';

const Emaillist = () => {

  const [emails, setEmails] = useState([]);

  const getData = async () => {
    
    const valRef = collection(db, 'emails')
    const dataDb = await getDocs(valRef)
    setEmails(dataDb.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
    
  }

  useEffect(() => {
    getData()
  }, [emails])

  return (
    <div className='emaillist'>
      <EmailListSetting />
      <Emailtype />

      {
        emails.map(({ id, data }) => {
          return <Emailbody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} />
        })
        
      }

    </div>
  )
}

export default Emaillist;