import image from "../../main_image.png";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={image}/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile