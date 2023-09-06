import React, { useState } from 'react';
import './css/compose.css';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const Compose = () => {

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const formSubmit = async (e) => {
        e.preventDefault();
        if (to === "") {
            return alert('Please fill Email ID')
        }
        if (subject === "") {
            return alert('Please fill Subject')
        }
        if (message === "") {
            return alert('Please fill message')
        }

        const valRef = collection(db, 'emails')
        await addDoc(valRef, {
            to,
            subject,
            message,
            timestamp: serverTimestamp()
        });
        setTo('');
        setSubject('');
        setMessage('');
        alert("Email sent successfully");
        dispatch(closeSendMessage());
    }

    return (
        <div className='compose'>
            <div className='compose_header'>
                <div className='compose__header__left'>
                    <span>New Message</span>
                </div>

                <div className='compose__header__right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} />
                </div>
            </div>

            <form onSubmit={formSubmit}>
                <div className='compose__body'>
                    <div className='compose__bodyForm'>
                        <input type='email' name='email'
                            placeholder='Reciepents' value={to} onChange={(e) => setTo(e.target.value)} />

                        <input type='text' name='subject'
                            placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

                        <textarea rows='20' name='message' onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                    </div>
                </div>

                <div className='compose__footer'>
                    <div className='compose__footer__left'>
                        <button type='submit'>
                            Send <ArrowDropDownIcon />
                        </button>
                    </div>

                    <div className='compose__footer__right'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>

            </form>

        </div >
    )
}

export default Compose;