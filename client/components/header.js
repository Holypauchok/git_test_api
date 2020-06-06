import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserName } from '../redux/reducers/repositories'

const Header = (props) => {
  const { username: userFromPar } = useParams()
  const username = useSelector((s) => s.repositories.userName)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(updateUserName(userFromPar))
}, [userFromPar])

  return (
    <div className="flex px-3 py-4 text-gray-800 bg-gray-400 mb-6">
      <div id="repository-name" className="flex-grow-1/5 text-gray-700 text-center p-3">
        <p>{username}</p>
        <p>{props.repository}</p>
      </div>
      <div className="flex-auto text-gray-700 text-right p-3">
        <Link to="/" id="go-back" className="p-6 font-bold">
          main
        </Link>
        <Link to={`/${username}`} id="go-repository-list" className="p-6 font-bold">
          repository-list
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Header)
