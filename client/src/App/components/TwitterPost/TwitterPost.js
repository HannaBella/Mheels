import React, { Component } from "react"
import {Button,Form,FormGroup,Label,Input,Row,Col,Container,Card,CardBody,CardHeader} from "reactstrap"

class TwitterPost extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth0: this.props.user,
      owner: '',
      tweetBody: '',
      tags: ''
    }
  }

  submit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="twitter-post">
        <Container className="mb-3">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader ><strong>Twitter Posting</strong></CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input 
                      type="textarea"
                      name="twitter-body"
                      id="twitter-body"
                      placeholder="Insert tweet"

                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default TwitterPost;