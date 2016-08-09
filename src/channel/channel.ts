/**
 * This class represents a basic channel.
 */
export class Channel {

    /**
     * Listen for an event on the channel instance.
     *
     * @param  {string} event
     * @param  {Function}   callback
     * @return {Channel}
     */
    abstract listen(event: string, callback: Function): Channel;

    /**
     * Listen for an event on the channel instance.
     *
     * @param  {string} event
     * @param  {Function}   callback
     * @return {Channel}
     */
    notification(callback: Function): Channel {
        return this.listen('.Illuminate.Notifications.Events.BroadcastNotificationCreated', callback);
    }
}