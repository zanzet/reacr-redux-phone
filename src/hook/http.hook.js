export const useHttp = () => {
    const controller = async (api, method='GET', obj) => {
        const options = {
            method: method,
            headers: {
                "content-type": "application/json"
            }
        }
        if(obj){
            options.body = JSON.stringify(obj)
        }
        try{
            const request = await fetch(api, options),
                  respons = await request.json()
            
            return respons
        }catch(e){
            throw e;
        }
    }
    return {controller}
}
export default useHttp