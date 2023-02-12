import classes from './Post.module.css'
import avatar from '../../../../avatar.jpg'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={avatar}/>
            {props.message}
            <div>
                <span>like {props.count}</span>
            </div>
        </div>
    )
}

export default Post