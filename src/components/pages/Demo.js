import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Stack } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getDemoApi } from '../../services/api';


export default function Demo() {


    const [victims, setVictims] = useState([]);
 
    // const umer={};
    // useEffect(() => {
    //      const getdetails=async()=>{
    //          const response=await fetch('http://localhost:3002/victimdetails')
    //         umer = response.json();
    //          console.log(umer);
    //          setVictims(Array.from(umer.data));
    //              setVictims(response.data);
    //          console.log(victims);            
    //        getdetails();
    //    }, [])


    useEffect(() => {

        getVictimsDetails();
        
    }, [] )

    const getVictimsDetails = async () =>{
        let response = await getDemoApi();
        console.log(response.data);
        setVictims(response.data);
    }

    // useEffect(() => {
    //   getvictimdetails();
    // }, [])
  
    // const getvictimdetails = async () => {
  
    //   const response = await getvictim();
    //   setVictimdetails(response.data);
      
  
    // }
  
    const styles = {
      tbl: {
        width: "40vw",
      },
      cardstyle: {
        width: "40rem",
        marginBottom: "20rem",
      },
    };
  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
        <Card style={styles.cardstyle} >
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              VICTIM ID : 1212
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              BED BOOKING CONFIRMATION
            </Alert.Heading>
          </Alert>

          <Form className="mt-1 p-3">
            <b>Dear Alex Peterson (4545456)</b>
            <p>
              Thank You, for using our online portal. Your Booking details are
              indicated below.
            </p>
            <br></br>
            <Stack direction="horizontal" gap={5}>
              <div>
                <b>Booking ID :</b> 45456{" "}
              </div>
              <div>
                <b> Booking Date :</b> 22/06/2022
              </div>
            </Stack>
            <div>
              <b>Shelter Camp Name :</b> Alex Peterson
            </div>
            <div>
              <b>Shelter Camp Address :</b> south east,towar road,california
            </div>
            <br />
            <div>
              <b> Member Details:</b>
            </div>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody>
                 {
                  victims.map((tb_data)=>(
                    <tr id={tb_data.id}>
                      <td>{tb_data.id}</td>
                      <td>{tb_data.name}</td>
                      <td>{tb_data.gender}</td>
                      <td>{tb_data.age}</td>
                      
                    </tr>

                  )
                     

                  )
                 }
              </tbody>
            </Table>

            <div className="d-flex justify-content-center mt-5">
              <Button variant="success" type="submit">
                Print
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  </>
  )
}
