import Notifications from "../models/notification.model.js";


export const getNotifications = async (req , res) => {
    try {
        const userId = req.user._id;

        const notifications = await Notifications.find({to:userId}).populate({
            path: "from",
            select: "username , profileImg"
        });

        await Notifications.updateMany({to: userId} , {read: true})
        res.status(200).json(notifications)
    } catch (error) {
        console.log("Error in get Notificaiton controller: " , error)
        res.status(500).json({error: "Internal server error"})
    }
}

export const deleteNotifications = async (req , res) => {
    try {
        const userId = req.user._id;
        await Notifications.deleteMany({to: userId})
    
        res.status(200).json({message: "Notification deleted successfully"})
    
    } catch (error) {
        console.log("Error in deleteNotifications controller: " , error)
        res.status(500).json({error: "Internal server error"})
    }
}
