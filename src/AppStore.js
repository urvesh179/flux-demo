
import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let click_data = ''
class AppStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return click_data;
    }

    click_button(id) {
        click_data=id
        console.log(click_data)
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'CLICK':
                console.log("-----")
                this.click_button(action.value);
                break;
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();

