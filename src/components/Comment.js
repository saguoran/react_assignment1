import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Comment({user, updateUser}) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({defaultValues:user});
  const onSubmit = async data => {   
    updateUser({user,...data});
    navigate('/thank-you');
  };  

  return (
    <div className="container">
    <h3>Comments</h3>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course Code: </Form.Label>
        <Form.Control {...register("courseCode", {requirej:"Please enter course code"})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Course Name:</Form.Label>
        <Form.Control {...register("courseName", {requirej:"Please enter your course name"})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student Email:</Form.Label>
        <Form.Control type="email" {...register("email")} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Faviourate Topic:</Form.Label>
        <Form.Control {...register("topic")} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Faviourate Assignment:</Form.Label>
        <Form.Control {...register("assignment")} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your Comments:</Form.Label>
        <Form.Control as="textarea" {...register("comment")} />
      </Form.Group>
     <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}