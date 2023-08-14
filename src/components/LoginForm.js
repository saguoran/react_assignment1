import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Login({updateUser}) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {  
    updateUser(data);
    navigate('/comment');
  };    

  return (
    <div className="container">
    <h3>Login to evaluate the course:</h3> 
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required {...register("email", {requirej:"Please enter your email"})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password", {requirej:"Please enter your password"})} required/>
      </Form.Group>
     <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
}