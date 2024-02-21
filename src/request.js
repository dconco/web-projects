async function Login(userInfo) {
   try {
      const response = await axios.post('http://localhost:8000/api/auth/login', userInfo, {
         headers: {
            'content-type': 'application/json'
         }
      })
      console.log(response);
      //const { message, userId } = response.data
         
      //console.log({ message: `${message} UserId=${UserId}` })
   } catch (error) {
      if (error.response) {
         const { status, message, type } = error.response.data
         console.log({ type: type, message: message })
      }
      else {
         console.log({ message: error.code || error.message })
      }
   }
}

Login({ email: 'concodave@gmail.com', password: 'david@123' })