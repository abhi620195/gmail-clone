import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import './css/sidebar.css'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} className='compose__btn' onClick={() => dispatch(openSendMessage())}>compose</Button>

      <Sidebaroptions Icon={InboxIcon} title={"Inbox"} number='224' isactive={true} />
      <Sidebaroptions Icon={StarRateIcon} title={"Starred"} number={500} />
      <Sidebaroptions Icon={WatchLaterIcon} title={"Snoozed"} number={300} />
      <Sidebaroptions Icon={LabelImportantIcon} title={'Important'} number={452} />

      <Sidebaroptions Icon={SendIcon} title="Sent" number={254} />
      <Sidebaroptions Icon={DraftsIcon} title="Drafts" number={258} />
      <Sidebaroptions Icon={LabelIcon} title="Category" number={258} />
      <Sidebaroptions Icon={DeleteIcon} title="[Map]/Trash" number={258} />
      <Sidebaroptions Icon={FindInPageIcon} title="Documents" number={258} />
      <Sidebaroptions Icon={ExpandMoreIcon} title="More" number={258} />
      <hr />
      <h3 className='sidebarOptions__heading'>Meet</h3>
      <Sidebaroptions Icon={VideocamIcon} title={"New Meeting"} />
      <Sidebaroptions Icon={KeyboardIcon} title={'Join a meeting'} />

    </div>
  )
}

export default Sidebar;