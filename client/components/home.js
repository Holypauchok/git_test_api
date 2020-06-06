import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import Head from './head'
import Header from './header'
import InputView from './input-view'
import RepositoryView from './repository-view'
import ProjectView from './project-view'

const Home = () => {
  const { username, repository } = useParams()

  return (
    <div>
      <Head title="Hello" />
      <Header username={username} repository={repository} />
      <div>
        <Switch>
          <Route exact path="/" component={() => <InputView />} />
          <Route exact path="/:username" component={() => <RepositoryView />} />
          <Route exact path="/:username/:repository" component={() => <ProjectView />} />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
