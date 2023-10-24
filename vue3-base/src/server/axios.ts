// 封装 axios
export const axios = {
    get<T>(url:string):Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url)

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    
                    setTimeout(() => {
                        // 因为在public 的data是 json 数据
                        resolve(JSON.parse(xhr.responseText))
                    }, 2000)
                }
            }
            xhr.send(null)
        })
    }
}