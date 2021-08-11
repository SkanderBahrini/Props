const Profile = (props) => {


    const handleclick =props.handleclick
    return ( 

   

        <div className="profile">
            <p>{props.fullname}</p>  
            <p>{props.children}</p>   
            <p>{props.bio}</p>  
         {props.profession}

         <button onClick={handleclick}> click </button>
        </div>
     );
}
 
export default Profile;