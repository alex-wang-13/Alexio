import image from '../images/pfp.jpg';

function ProfilePic() {
  return (
    <div className="profile-image-container container-fluid" style={{padding: 0}}>
      <div className="row">
        <img src={image} alt="Profile Image" className="profile-image" />
      </div>
    </div>
  );
}

export default ProfilePic;