export const getDataFromLocalStorage = () => {
    return JSON.parse (window.localStorage.getItem("test"))
}