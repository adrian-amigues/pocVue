import fetch from 'isomorphic-fetch'
import {get} from 'lodash'

const API_BASE = 'http://localhost:4000/graphql'

const runQuery = (query) => {
  return fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(res => get(res, 'data'))
    .catch(err => new Error(err))
}

const fetchCards = () => runQuery('{ cards { name imageUrl } }')

export {
  fetchCards,
}
