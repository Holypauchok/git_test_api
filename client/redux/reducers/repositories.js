import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const GET_REPOS_LIST = 'GET_REPOS_LIST'
const GET_README_FILE = 'GET_README_FILE'

const initialState = {
  userName: '',
  list: [],
  readmeFile: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME: {
      return { ...state, userName: action.userName }
    }
    case GET_REPOS_LIST: {
      return { ...state, list: action.list }
    }
    case GET_README_FILE: {
      return { ...state, readmeFile: action.readmeFile }
    }
    default:
      return state
  }
}

export function updateUserName(userName) {
  return { type: UPDATE_USER_NAME, userName }
}

export function getRepositoryList(username) {
  return function (dispatch) {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data: list }) => {
      dispatch({ type: GET_REPOS_LIST, list })
    })
  }
}

export function getReadmeFile(username, repos) {
  const headers = { Accept: 'application/vnd.github.VERSION.html' }
  return function (dispatch) {
    axios(`https://api.github.com/repos/${username}/${repos}/readme`, {
      param: {},
      headers
    }).then(({ data: readmeFile }) => {
      dispatch({ type: GET_README_FILE, readmeFile })
    })
  }
}
