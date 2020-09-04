import React from "react";
import {Table, Container } from "react-bootstrap";

//styling
import "./style/Projects.scss";

class Projects extends React.Component {
  state = {
    data: [],
    isLoading: true,
    error: null,
    username: "Manosgou",
  };

  componentDidMount() {
    fetch("https://api.github.com/users/" + this.state.username + "/repos")
      .then((response) => response.json())
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    let counter = 1;
    return (
      <div className="Projects">
        <Container>
          <h1>Repos</h1>
          <p className="text-white-50">
            The following table contains all my github public projects.You are
            free to explore them...
          </p>
          <Table responsive striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>RepoName</th>
                <th>Language</th>
                <th>Created at</th>
                <th>Size(Kb)</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.isLoading ? (
                this.state.data.map((repo) => {
                  let created = repo.created_at;
                  let i = created.indexOf("T");

                  return (
                    <tr key={repo.id}>
                      <td>{counter++}</td>
                      <td>
                        <a href={repo.html_url}>{repo.name}</a>
                      </td>
                      <td>{repo.language}</td>
                      <td>
                        {created.substring(0, i !== -1 ? i : created.length)}
                      </td>
                      <td>{repo.size}</td>
                    </tr>
                  );
                })
              ) : (
                <td>Loading...</td>
              )}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Projects;
