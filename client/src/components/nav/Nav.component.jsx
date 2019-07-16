import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { List, AutoSizer } from 'react-virtualized'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Nav.css'

import constants from './Nav.constants'
import helpers from '../../helpers'
import Search from '../../services/search.service'

const Nav = () => {
  const listRef = useRef(null)
  const [error, setError] = useState('')
  const [searchEntry, setSearchEntry] = useState('')
  const [fetching, setFetchingState] = useState(true)
  const [congressList, setCongressList] = useState([])
  const [congressSearchList, setCongressSearchList] = useState([])
  const [selectedState, selectState] = useState(constants.states[0].abbrev)
  const [officeType, selectOfficeType] = useState(constants.offices[0].abbrev)

  useEffect(() => {
    ;(async () => {
      try {
        const results = await (officeType === 'REP' ? Search.getRepresentatives(selectedState) : Search.getSenators(selectedState))

        setCongressList(results)
        setCongressSearchList(results)
      } catch(err) {
        setError(err.message)
      } finally {
        setFetchingState(false)
      }

    })()
  }, [selectedState, officeType])

  const renderRow = ({ index, key, style, parent }) => {
    const { name, party } = congressSearchList[index]

    return (
      <div key={key} className="py-1 px-3" style={style}>
        <NavLink to={`/${index}`} className="nav_item_link" activeClassName="nav_item_active">
          <div>{name}</div>
          <h6 className="badge badge-light m-0">{party.toUpperCase()}</h6>
        </NavLink>
      </div>
    )
  }

  const onSearchClear = () => {
    setSearchEntry('')
    setCongressSearchList(congressList)
  }

  const onOfficeTypeChange = event => {
    setFetchingState(true)
    selectOfficeType(event.target.value)
  }

  const onStateChange = event => {
    setFetchingState(true)
    selectState(event.target.value)
  }

  const onSearchChange = event => {
    const searched = event.target.value
    const filteredCongress = searched ? helpers.searchList(congressList, searched) : congressList

    setSearchEntry(searched)
    listRef.current.forceUpdateGrid()
    setCongressSearchList(filteredCongress)
  }

  return (
    <div className="nav_container">
      <div className="d-flex flex-wrap align-items-center m-3">
        <h1>Who's my</h1>
        <select value={officeType} onChange={onOfficeTypeChange} className="nav_office_type_select">
          {constants.offices.map(office => (
            <option key={office.name} value={office.abbrev}>
              {office.name}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex m-3">
        <select value={selectedState} onChange={onStateChange} className="form-control mr-3 w-50">
          {constants.states.map(state => (
            <option key={state.name} value={state.abbrev}>
              {state.name}
            </option>
          ))}
        </select>

        <div className="position-relative flex-fill">
          <input type="text" name="search_list" value={searchEntry} title="search congressList" placeholder="Search" className="form-control w-100" onChange={onSearchChange} />
          {searchEntry && (
            <button type="button" title="Clear search" className="btn btn-light btn-sm position-absolute nav_search_clear" onClick={onSearchClear}>
              <FontAwesomeIcon icon="times" className="text-dark" />
            </button>
          )}
        </div>
      </div>

      {error && <div className="alert alert-danger m-3" role="alert">ERROR: {error}</div>}

      {fetching ? (
        <div className="spinner-border text-primary m-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="nav_list">
          <AutoSizer>
            {({ width, height }) => {
              return <List ref={listRef} width={width} height={height} rowHeight={50} rowCount={congressSearchList.length} rowRenderer={renderRow} overscanRowCount={3} />
            }}
          </AutoSizer>
        </div>
      )}
    </div>
  )
}

export default Nav
