"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "title",
            description: "description",
            done: false
        };
    }
    create(todoCreationParams) {
        return {
            id: "1",
            title: "title",
            description: "description",
            done: false
        };
    }
}
exports.TodoService = TodoService;
