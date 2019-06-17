import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLeads } from '../../actions/leads'


class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired
  }
  componentDidMount(){
    this.props.getLeads()
  }

  render() {
    console.log(this.props.leads)
    return (
      <div>
        <h1>Add leads </h1>
        <Fragment>
          <h2>
            leads
          </h2>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
            </thead>
            <tbody>
              { this.props.leads.map(lead => {
                return (<tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button onClick={this.props.deleteLeads.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>)
              })}
            </tbody>
          </table>
        </Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})



export default connect(mapStateToProps, { getLeads, deleteLeads })(Leads);
