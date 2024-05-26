class Observable {
    // Конструктор принимает начальное состояние и инициализирует массив подписчиков
    constructor(initialState) {
        this._state = initialState;
        this.observers = [];
    }

    // Геттер для доступа к текущему состоянию
    get state() {
        return this._state;
    }

    // Сеттер для обновления состояния и уведомления подписчиков
    set state(newState) {
        this._state = newState;
        this.notify(newState);
    }

    // Метод для подписки на изменения состояния
    // Возвращает функцию для отписки
    subscribe(observer) {
        this.observers.push(observer);
        return () => {
            this.unsubscribe(observer);
        };
    }

    // Метод для отписки от изменений состояния
    // Вызвать функцию возвращенную методом subscribe
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Метод для уведомления всех подписчиков об изменении состояния
    notify(state) {
        this.observers.forEach(observer => observer(state));
    }
}