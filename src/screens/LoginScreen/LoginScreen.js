import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import lottie from 'lottie-web';
import '../../styles/app.css';
import './LoginScreen.css';

function LoginScreen() {

    const container = useRef(null);
    const user = useRef(null);
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          autoplay: true,
          loop: false,
          animationData: require('../../assets/img/office.json')
        });
        lottie.loadAnimation({
            container: user.current,
            renderer: 'svg',
            autoplay: true,
            loop: false,
            animationData: require('../../assets/img/user.json')
          });
      }, []);

      const onEmailChange = e => setEmail(e.target.value);
      const onPasswordChange = e => setPassword(e.target.value);
      const onLogin = async e => {
          e.preventDefault();

          const userEmail = await localStorage.getItem('email') || '';
          const userPassword = await localStorage.getItem('password') || '';

          if (!email.trim() && !password.trim()) {
            alert('OOPS! Email and Password are Required!');
            return;
        }

          if ( userEmail === email && userPassword === password) {
            history.push('/dashboard');
              return;
          }

          alert('ERROR! Access Denied');
          return;

      };


    return (

        <div className="full-height">
            <div class="leftPanel">
                <h1>Login Here</h1>
                <div className="user" ref={user}></div>
                <form class="w-full max-w-lg no-drag" onSubmit={onLogin}>
                <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            email
                        </label>
                        <input onChange={onEmailChange} value={email} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="JaneDoe@example.com" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input onChange={onPasswordChange} value={password} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full loginBtn">
                        Login
                    </button>
                    <Link to="/register" class="text-blue-500 hover:text-blue-800 text-center">Don't have an Account?</Link>
                    </form>
            </div>
            <div class="rightPanel">
                <div className="container" ref={container}></div>
            </div>
        </div>
    )
}

export default LoginScreen
