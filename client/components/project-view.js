import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReadmeFile } from '../redux/reducers/repositories'

// import { history } from '../redux'

import Head from './head'

const ProjectView = () => {
  const { username, repository } = useParams()
  const readme = useSelector((s) => s.repositories.readmeFile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReadmeFile(username, repository))
  }, [username, repository])

  return (
    <div>
      <Head title="Hello" />
      <div className="m-6" id="description">
        {parse(`${readme}`)}
      </div>
    </div>
  )
}

ProjectView.propTypes = {}

export default React.memo(ProjectView)
