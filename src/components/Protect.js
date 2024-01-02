import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const Protect = (props) => {
  const history = useHistory()
  const [token, setToken] = useState('')

  useEffect(() => {
    let getToken = localStorage.getItem('userToken')
    if(!getToken){
      return history.push('/')
    }
    setToken(getToken)
  }, [])

  if(!token){
    return <p>Loading...</p>
  }

  return (
    <>
    { props.children }
    </>
  )
}

export default Protect