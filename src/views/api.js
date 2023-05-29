import axios from "axios"

 async function fetching() {
   try {
         const response = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
   
          const data = await  response.data
   console.log(data);
   return data
   } catch (error) {
      alert(error)
   }

}
const result =  await fetching()
console.log(result)
export default result