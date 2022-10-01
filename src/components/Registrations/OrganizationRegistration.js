import React, { useState } from "react";
import { Row ,Col  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { addOrganizationNgoApi } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InitialValues ={
  oType : "",
  oName : "",
  oAuthName : "",
  oMobNo : "",
  oAddress : "",
  oCity : "",
  oEmail : "",
  oRegisNo : "",
  oUrl : "",
  username: "",
  password : "",
    
}

export default function OrganizationRegistration() {

    const [org,setOrg] = useState(InitialValues);
    const navigate=useNavigate();


    const onValueChange2 = (e) =>{
        console.log(e.target.name, e.target.innerText);
        setOrg({...org, [e.target.name] : e.target.innerText})
        console.log(org);
      }
    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setOrg({...org, [e.target.name] : e.target.value})
        console.log(org);
      }
      const addOrganization = async () => {
      
        await addOrganizationNgoApi(org);
        toast.success('🦄 Registration of Organization Successfull..!!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          navigate("/LogIn");
          
    }  
    const styles = {
      cardstyle: {
        width: "50rem",
        marginBottom: "20rem",
      },
    };

  return (
    <div className="d-flex justify-content-center">
    <div className="pt-5 pb-5 ">
      <Card style={styles.cardstyle}>
        <Alert variant="secondary">
          <Alert.Heading className="d-flex justify-content-center">
            ORGANIZATION REGISTRAION FORM
          </Alert.Heading>
        </Alert>
        <Form className=" p-4" >
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail" >
            <Form.Label column sm={3} >
              Type of Organization
            </Form.Label>
            <Col sm={9} >
              <Dropdown column > 
                <Dropdown.Toggle
                  size="sm"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Select type of Organization
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item
                    
                    id="ngo"
                    onClick={(e) => {
                      onValueChange2(e);
                    }}
                    name="oType"
                    
                  >
                    ngo
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="non-ngo"
                    onClick={(e) => {
                      onValueChange2(e);
                    }}
                    name="oType"
                  >
                    non-ngo
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Name Organization
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Name Organization"
                onChange={(e) => onValueChange(e)}
                name="oName"
                required
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Name of Authority
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter name authority"
                onChange={(e) => onValueChange(e)}
                name="oAuthName"
                required
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Mobile No
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                placeholder="Enter your mobile no"
                onChange={(e) => onValueChange(e)}
                name="oMobNo"
                required
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Address
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization address"
                onChange={(e) => onValueChange(e)}
                name="oAddress"
                required
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              City
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization city"
                onChange={(e) => onValueChange(e)}
                name="oCity"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Email Address
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                placeholder="Enter your email address here"
                onChange={(e) => onValueChange(e)}
                name="oEmail"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              Registration Number
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Organization RGSNO"
                onChange={(e) => onValueChange(e)}
                name="oRegisNo"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              URL of Organization
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="url"
                placeholder="Enter Organization address"
                onChange={(e) => onValueChange(e)}
                name="oUrl"
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
            username            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                aria-label="Username"
                onChange={(e) => onValueChange(e)}
                name="username"
                required
              />{" "}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
            password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                placeholder="enter password"
                onChange={(e) => onValueChange(e)}
                name="password"
                required
              />{" "}
            </Col>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms & Check me out" />
          </Form.Group>
          <div className="pt-4">
            <Button
              onClick={() => addOrganization()}
              variant="success"
              type="submit"
            >
              Register As Organization
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;
            <Button variant="success" type="reset">
              Reset Values
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  </div>
  );
}
