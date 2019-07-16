import React from 'react'
import PropTypes from 'prop-types'

import './Profile.css'

import { Store } from '../../store'

const Profile = ({ match }) => {
  const [store] = Store()
  const { congressList, fetching } = store
  const congressInView = congressList[match.params.index] || {}

  return fetching ? (
    <div className="m-auto">
      <div className="spinner-border text-primary m-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="m-4 profile_container">
      <h2 className="mt-2 mb-4 profile_heading">Info</h2>
      <table className="table table-striped table-borderless">
        <tbody>
          <tr>
            <th scope="row" className="profile_table_main_col">
              Full Name
            </th>
            <td>
              <b>{congressInView.name}</b>
            </td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              Phone
            </th>
            <td>{congressInView.phone}</td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              Office
            </th>
            <td>{congressInView.office}</td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              Link
            </th>
            <td>
              <a href={congressInView.link} target="_blank" rel="noopener noreferrer">
                {congressInView.link}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              Party
            </th>
            <td>
              <h5>
                <span className="badge badge-primary">{congressInView.party.toUpperCase()}</span>
              </h5>
            </td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              State
            </th>
            <td>{congressInView.state}</td>
          </tr>
          <tr>
            <th scope="row" className="profile_table_main_col">
              District
            </th>
            <td>{congressInView.district}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Profile.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Profile
