import React from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='w-25 mx-auto'>
            <h2 className='text-center fw-bold text-info mt-4'>Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Submit
                </Button>
                <p>Don't have an account? <Link to='/register'>Create an Account</Link></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;