import todoReducer from './todoReducer';
import todoFilterReducer from './todoFilterReducer';
import constants from '../constants/actionsConstants';

describe('reducers', () => {
    it('todoReducer should handle initial state', () => {
        expect(
            todoReducer(undefined, {})
        ).toEqual([])
    });

    it('todoFilterReducer should handle initial state', () => {
        expect(
            todoFilterReducer(undefined, {})
        ).toEqual(constants.SHOW_ALL)
    });

    it('todoReducer should handle CREATE_TODO_ITEM', () => {
        expect(
            todoReducer([], {
                type: constants.CREATE_TODO_ITEM,
                item: {
                    title: 'Title',
                    content: 'Content',
                },
                id: 1
            })
        ).toEqual([
            {
                title: 'Title',
                content: 'Content',
                completed: false,
                id: 1
            }
        ]);

        expect(
            todoReducer([
                {
                    title: 'Title',
                    content: 'Content',
                    completed: false,
                    id: 1
                }
            ], {
                type: constants.CREATE_TODO_ITEM,
                item: {
                    title: 'Title2',
                    content: 'Content2',
                },
                id: 2
            })
        ).toEqual([
            {
                title: 'Title',
                content: 'Content',
                completed: false,
                id: 1
            }, {
                title: 'Title2',
                content: 'Content2',
                completed: false,
                id: 2
            }
        ])
    });

    it('todoReducer should handle EDIT_STATUS_TODO_ITEM', () => {
        expect(
            todoReducer([
                {
                    item: {
                        title: 'Title',
                        content: 'Content',
                    },
                    completed: false,
                    id: 1
                },
                {
                    item: {
                        title: 'Title2',
                        content: 'Content2',
                    },
                    completed: false,
                    id: 2
                }
            ], {
                type: constants.EDIT_STATUS_TODO_ITEM,
                id: 1
            })
        ).toEqual([
            {
                item: {
                    title: 'Title',
                    content: 'Content',
                },
                completed: true,
                id: 1
            },
            {
                item: {
                    title: 'Title2',
                    content: 'Content2',
                },
                completed: false,
                id: 2
            }
        ])
    });

    it('todoFilterReducer should handle SET_TODO_STATUS_FILTER', () => {
        expect(
            todoFilterReducer([
                {
                    item: {
                        title: 'Title',
                        content: 'Content',
                    },
                    completed: true,
                    id: 1
                },
                {
                    item: {
                        title: 'Title2',
                        content: 'Content2',
                    },
                    completed: false,
                    id: 2
                }
            ], {
                filter: constants.SHOW_ALL
            })
        ).toEqual([
            {
                item: {
                    title: 'Title',
                    content: 'Content',
                },
                completed: true,
                id: 1
            },
            {
                item: {
                    title: 'Title2',
                    content: 'Content2',
                },
                completed: false,
                id: 2
            }
        ]);
    });

    it('todoReducer should handle EDIT_TODO_ITEM', () => {
        expect(
            todoReducer([
                {
                    item: {
                        title: 'Title',
                        content: 'Content',
                    },
                    completed: true,
                    id: 1
                },
                {
                    item: {
                        title: 'Title2',
                        content: 'Content2',
                    },
                    completed: false,
                    id: 2
                }
            ], {
                type: constants.EDIT_TODO_ITEM,
                item: {
                    title: 'TitleChanged',
                    content: 'ContentChanged',
                },
                id: 1
            })
        ).toEqual([
            {
                item: {
                    title: 'Title',
                    content: 'Content',
                },
                title: 'TitleChanged',
                content: 'ContentChanged',
                completed: true,
                id: 1
            },
            {
                item: {
                    title: 'Title2',
                    content: 'Content2',
                },
                completed: false,
                id: 2
            }
        ])
    });

    it('todoReducer should handle REMOVE_TODO_ITEM', () => {
        expect(
            todoReducer([
                {
                    item: {
                        title: 'TitleChanged',
                        content: 'ContentChanged',
                    },
                    completed: true,
                    id: 1
                },
                {
                    item: {
                        title: 'Title2',
                        content: 'Content2',
                    },
                    completed: false,
                    id: 2
                }
            ], {
                type: constants.REMOVE_TODO_ITEM,
                id: 1
            })
        ).toEqual([
            {
                item: {
                    title: 'Title2',
                    content: 'Content2',
                },
                completed: false,
                id: 2
            }
        ])
    })
});