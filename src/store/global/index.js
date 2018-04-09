export default {
    state: {
        isSidebarOpen: true
    },
    mutations: {
        UpdateIsSidebarOpen (state, isOpen) {
            state.isSidebarOpen = isOpen;
        }
    }
}
