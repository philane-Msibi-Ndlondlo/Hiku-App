import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import lottie from 'lottie-web';
import '../../styles/app.css';
import '../LoginScreen/LoginScreen.css';
import './RegisterScreenStyle.css';

function RegisterScreen() {

    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ ConfirmPassword, setConfirmPassword ] = useState('');
    const history = useHistory();
    const container = useRef(null);
    const onFirstNameChange = e => setFirstName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onPasswordConfirmChange = e => setConfirmPassword(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onRegister = async e => {
        e.preventDefault();

        const userEmail = await localStorage.getItem('email') || '';
        const userPassword = await localStorage.getItem('password') || '';

        if (!email.trim() || !password.trim() || !ConfirmPassword.trim() || !firstname.trim() || !lastname.trim()) {
          alert('OOPS! Email and Password are Required!');
          return;
      }

      if (password !== ConfirmPassword) {
          alert("OOPS! Passwords must match!");
          return;
      }

        if ( userEmail || userPassword) {

            alert('OOPS! You already have an account. Login');
            return;
        }

        if (!ValidateEmail(email)) {
            alert('OOPS! Invalid Email address');
            return;
        }

        if (!(/^[a-zA-Z ]*$/.test(firstname)) || !(/^[a-zA-Z ]*$/.test(lastname))) {
            alert("OOPS! Firstname and lastname should have letters and whitespace")
            return;
        }

        if (password.trim().length <= 8 && password.trim().length >= 10) {
            alert("OOPS! Password must have 8 to 10 letters");
            return;
        }

        await localStorage.setItem('firstname', firstname);
        await localStorage.setItem('lastname', lastname);
        await localStorage.setItem('email', email);
        await localStorage.setItem('password', password);

        alert('Horray! Registration went well. Login')
        history.push('/login');
        return;

    };

    const ValidateEmail = (mail) => 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
            
            return (false)
    }

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          autoplay: true,
          loop: false,
          animationData: require('../../assets/img/office.json')
        });
      }, []);

    return (
        <div className="full-height">
            <div class="leftPanel">
                <h1>Register Here</h1>
                <form class="w-full max-w-lg no-drag" onSubmit={onRegister}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input onChange={onFirstNameChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input onChange={onLastNameChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input onChange={onEmailChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="JoeDoe@example.com" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Password
                            </label>
                            <input onChange={onPasswordChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password" placeholder="***************" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Confirm Password
                            </label>
                            <input onChange={onPasswordConfirmChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="***************" />
                        </div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full loginBtn">
                        Register
                    </button>
                    <Link to="/login" class="text-blue-500 hover:text-blue-800 text-center">Have an Account?</Link>
                    </form>
            </div>
            <div class="rightPanel">
                <div className="container" ref={container}></div>
            </div>
        </div>
    )
}

export default RegisterScreen;
