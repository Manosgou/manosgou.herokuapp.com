import React from 'react';
import { Row } from 'react-bootstrap';
import './Style/Projects.scss';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';



class Projects extends React.Component {


  state = {
    data: [],
    isLoading: true,
    error: null,
    username: 'Manosgou'
  };

  componentDidMount() {

    fetch("https://api.github.com/users/" + this.state.username + "/repos")

      .then(response => response.json())

      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    let counter = 1;
    return (
      <div className="Projects">

        <Row id="title-container" className="border-bottom justify-content-center p-5">
          <div className="border-bottom border-top justify-content-center p-3" >
            <h3>Projects</h3>
          </div>
        </Row>
        <Table responsive striped bordered hover variant="light">
          <thead >
            <tr>
              <th>#</th>
              <th>RepoName</th>
              <th>Language</th>
              <th>Created at</th>
              <th>Size(Kb)</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.isLoading ?
              this.state.data.map((repo) => {
                let created = repo.created_at;
                let i = created.indexOf('T');

                return <tr key={repo.id}>
                  <td>{counter++}</td>
                  <td ><a href={repo.html_url}>{repo.name}</a></td>
                  <td>{repo.language}</td>
                  <td>{created.substring(0, i !== -1 ? i : created.length)}</td>
                  <td>{repo.size}</td>

                </tr>

              }) : (<td>Loading...</td>)
            }


          </tbody>
        </Table>
      </div>

    );
  }
}

export default Projects;