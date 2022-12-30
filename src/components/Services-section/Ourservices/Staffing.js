import React from 'react'
import './staffing.css'
import AlbumIcon from '@mui/icons-material/Album';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Staffing = () => {
  return (
    <div className="staffheading">
    <h4>Talent Solution</h4>
    
    <div className="mainStaffBox bg-gradient">
    <div className="mainStaffBox1">
    <div className="mainStaffBox11 box111">
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Direct Hire</h5>
    <p>A staffing agency works to find, qualify and hire permanent staff members on behalf of their client qualify and hire permanent staff members on behalf of their client. </p>
    </div> </div>
    <div className="mainStaffBox11">
    
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Resume</h5>
    <p> Our professional Resume Designs are proven to land interviews professional Resume Designs are proven to land interviews.</p>
    </div> </div>
    <div className="mainStaffBox11">
    
    <RadioButtonCheckedIcon fontSize="small" className='staffBoxHeadicon' />
    <div className="staffBoxHead">
    <h5>Personality</h5>
    <p>I am moderately intelligent and generally friendly with my colleagues. I do follow a discipline during the day I do follow a discipline during the day.</p>
    </div> </div>
    </div>
    <div className="mainStaffBox2">
    <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" class="center" />
    </div>
    </div>
    </div>
  )
}

export default Staffing