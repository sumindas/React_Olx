import React,{useEffect,useState,useContext} from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';

function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
    if (postDetails && postDetails.userID) {
      const { userID } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userID).get()
        .then((res) => {
          res.forEach((element) => {
            setUserDetails(element.data());
          });
        })
        .catch((error) => {
          alert('Error fetching user details:', error);
        });
    }
  }, [postDetails, firebase]);


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url ? (
          <img src={postDetails.url} alt="" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails ? postDetails.price : ''} </p>
          <span></span>
          <p>{postDetails ? postDetails.name : ''}</p>
          <span>{postDetails ? postDetails.cratedAt : ''}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
  
}
export default View;
