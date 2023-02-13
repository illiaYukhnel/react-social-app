import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Ilya
                </div>
                <div className={classes.dialog}>
                    Pasha
                </div>
                <div className={classes.dialog}>
                    Jessica
                </div>
                <div className={classes.dialog}>
                    Kristina
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your car?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs