import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../redux'
import { updateUserName } from '../redux/reducers/repositories'
// import { Link } from 'react-router-dom'

import Head from './head'

const InputView = () => {
  const username = useSelector((s) => s.repositories.userName)
  const dispatch = useDispatch()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-300 rounded-lg border shadow-lg px-20 py-10">
          <input
            id="input-field"
            className="bg-white text-gray-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-10 block w-full appearance-none leading-normal"
            type="text"
            placeholder="enter username github"
            value={username}
            onChange={(e) => dispatch(updateUserName(e.target.value))}
          />
          <button
            id="search-button"
            type="button"
            onClick={() => history.push(`/${username}`)}
            className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-2 px-10 mt-5 border border-gray-400 rounded shadow block w-full"
          >
            Search
          </button>
          {/* <Link to={`/${username}`}>push me im button</Link> */}
        </div>
      </div>
    </div>
  )
}

InputView.propTypes = {}

export default React.memo(InputView)
