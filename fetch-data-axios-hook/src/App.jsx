import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Input } from 'reactstrap'
import ReactPaginate from 'react-paginate'

import useHackerNewsApi from './components/useHackerNewsApi'
import './App.css'

function App() {
  const [query, setQuery] = useState('redux')
  const [pageNumber, setPageNumber] = useState(1)

  const [{ data, isLoading, isError }, setUrl] = useHackerNewsApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] }
  )

  const onHandleSubmit = (e) => {
    e.preventDefault()
    setPageNumber(1)
    setUrl(
      `https://hn.algolia.com/api/v1/search?query=${query}&&page=${pageNumber}`
    )
    // setQuery('')
  }

  const onHandleChange = (data) => {
    setPageNumber(data.selected + 1)
    setUrl(
      `https://hn.algolia.com/api/v1/search?query=${query}&&page=${pageNumber}`
    )
  }
  return (
    <div className="App">
      <h1>Search Hacker News</h1>
      <Form onSubmit={onHandleSubmit} className="search--form">
        <Input
          type="text"
          placeholder="Input a Search Word"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button
          color="primary"
          onClick={onHandleSubmit}
          className="search--button"
        >
          Search
        </Button>
      </Form>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul className="items">
            {data &&
              data.hits.map((item) => (
                <li key={item.objectID} className="item">
                  <a href={item.url} className="item--a">
                    {item.title}
                  </a>
                  <p>{item.author}</p>
                </li>
              ))}
          </ul>
          <ReactPaginate
            className="pagination justify-content-center my-4 gap-4"
            nextLabel="Next"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousLabel="Prev"
            previousClassName="btn btn-outline-primary fs-5 prev"
            nextClassName="btn btn-outline-primary fs-5 next"
            activeClassName="active"
            pageCount={data?.nbPages - 1}
            onPageChange={onHandleChange}
            pageClassName="page-item"
            pageLinkClassName="page-link"
          />
        </>
      )}
    </div>
  )
}

export default App
