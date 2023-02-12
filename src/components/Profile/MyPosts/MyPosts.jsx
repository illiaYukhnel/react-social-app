import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes}>
                    <Post message='Hi, how are you?' count='15'/>
                    <Post message='It is my first post' count='25'/>
                </div>
            </div>
    )
}

export default MyPosts