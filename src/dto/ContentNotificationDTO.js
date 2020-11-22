export default class ContentNotificationDTO{

    constructor (title, body, dataC) {
        this.title = title;
        this.body = body;
        this.data = {data: dataC};
    }
}