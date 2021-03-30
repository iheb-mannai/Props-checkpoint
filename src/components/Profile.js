import React from 'react' ;
import './prof.css' ;
import PropTypes from 'prop-types'


const Profile = (props) => {
    return (
        <div>
            
            <div className="col-md-4">
 

 <div className="profile-card-4 text-center"><img src="28471474_1933061906722798_6846834042043856043_n.jpg" className="img img-responsive" alt='iheb_image'/>
     <div className="profile-content">
         <div className="profile-name">{props.name}
             <p>{props.email}</p>
         </div>
         <div className="profile-description" style={{fontSize: '20px'}}>{props.profession}</div>
         <div className="row">
             <div className="col-xs-4">
                 <div className="profile-overview">
                     <p>TWEETS</p>
                     <h4>1300</h4></div>
             </div>
             <div className="col-xs-4">
                 <div className="profile-overview">
                     <p>FOLLOWERS</p>
                     <h4>250</h4></div>
             </div>
             <div className="col-xs-4">
                 <div className="profile-overview">
                     <p>FOLLOWING</p>
                     <h4>168</h4></div>
             </div>
             </div>
             </div>
             </div>
             </div>

            
        </div>
    )
}

/* -------- Default props -------- */
Profile.defaultProps = {
    name: "enter a name" ,
    email : 'example@example.com' ,
    profession: 'enter a profession' 
    
   };
   
/* -------- Prop Types -------- */
Profile.propTypes = {
    name: PropTypes.string ,
    email : PropTypes.string, 
    profession: PropTypes.string
}

export default Profile
