const StorageService = {

    get<T>(key: string): T | null {
        const value = localStorage.getItem(key)

        if(!value){
            return null
        }

        return JSON.parse(value)
    },

    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value))
    },

    remove(key: string): void{
        localStorage.removeItem(key)
    },

    clear() : void {
        localStorage.clear()
    }
}

export default StorageService