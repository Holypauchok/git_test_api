import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getRepositoryList } from '../redux/reducers/repositories'
// import { history } from '../redux'

import Head from './head'

const RepositoryView = () => {
  const { username } = useParams()
  const reposit = useSelector((s) => s.repositories.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRepositoryList(username))
  }, [username])

  return (
    <div>
      <Head title="Hello" />
      <ol className="list-decimal list-inside m-6">
        {reposit.map((repos) => {
          return (
            <li key={repos.name}>
              <Link to={`/${username}/${repos.name}`}>{repos.name}</Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

RepositoryView.propTypes = {}

export default React.memo(RepositoryView)

