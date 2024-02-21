async function Login(userInfo) {
   try {
      const response = await axios.post('http://localhost:8000/api/auth/login', userInfo, {
         headers: {
            'content-type': 'application/json'
         }
      })
      const { message, userId } = response.data
      console.log({ message: `${message} UserId=${userId}` })
   }
   catch (error) 
   {
      if (error.response) {
         const { status, message, type } = error.response.data
         console.log({ type, message })
      }
      else {
         console.log({ message: error.message || error.code })
      }
   }
}

Login({ email: 'concodave@gmail.com', password: '123456' })