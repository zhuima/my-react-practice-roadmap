import React, { useState } from 'react'
import { Button, FormGroup, Label, Input, Form, Table } from 'reactstrap'

const Jobs = () => {
  const [jobInfo, setJobInfo] = useState({
    name: '',
    job: '',
  })
  const [job, setJob] = useState([])
  const handleChange = (e) => {
    setJobInfo({ ...jobInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (jobInfo.name.trim() && jobInfo.job.trim()) {
      const newJob = { ...jobInfo, id: new Date().getTime().toString() }
      setJob([...job, newJob])
      setJobInfo({ name: '', job: '' })
    }
  }
  return (
    <div>
      <h1>React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>

      <Table striped>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {job.map((jobinfo, index) => {
            return (
              <tr key={index}>
                <th scope="row">{job.id}</th>
                <td>{jobinfo.name}</td>
                <td>{jobinfo.job}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() =>
                      setJob(
                        job.filter(
                          (jobinfodetails) => jobinfodetails.id !== jobinfo.id
                        )
                      )
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <h2>Add New</h2>
      <Form inline>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            required
            min={4}
            max={30}
            id="name"
            name="name"
            placeholder="zhuima"
            type="text"
            value={jobInfo.name}
            onChange={handleChange}
          />
        </FormGroup>{' '}
        <FormGroup>
          <Label for="job">Job</Label>
          <Input
            required
            min={4}
            max={30}
            id="job"
            name="job"
            placeholder="job"
            type="text"
            value={jobInfo.job}
            onChange={handleChange}
          />
        </FormGroup>{' '}
        <Button
          color="success"
          onClick={handleSubmit}
          disabled={
            jobInfo.name.trim() === '' || jobInfo.job.trim() === ''
              ? true
              : false
          }
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Jobs
