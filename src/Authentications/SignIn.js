import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.warn('Username and password should not be empty');
      return;
    }

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    params.append('referer', 'https://gis.kigalicity.gov.rw/portal/')
    params.append('client', 'https://gis.kigalicity.gov.rw/portal/')
    params.append('expiration', '3600')

    const URL = 'https://gis.kigalicity.gov.rw/portal/sharing/rest/generateToken?f=json'

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    axios.post(URL, params, config).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error.message);
      }else{
        localStorage.setItem('token', response.data.token);
        toast.success("You have successfully login");
        navigate("/dashboard", { replace: true });
      }
      
    }).catch((error) => {
      toast.error(error.message);
    })
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-200">
      <section className="h-full gradient-form  md:h-screen w-full flex justify-center items-center">
        <div className="container py-12 px-6 h-full w-full flex justify-center items-center">
          <div className="flex justify-center items-center flex-wrap h-full w-full g-6 text-gray-800">
            <div className="xl:w-10/12 w-full flex justify-center items-center">
              <div className="bg-white shadow-lg rounded-lg w-full flex justify-center items-center">
                <div className="lg:flex lg:flex-wrap g-0 w-full">
                  <div className="lg:w-6/12 px-4 md:px-0 flex-auto">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center ">
                        <div className="flex justify-center items-center mb-5 mr-4">
                          <figure className="w-[90px] h-[75px]  relative rounded-md drop-shadow-lg">
                            <img
                              className="w-full object-cover rounded-full "
                              src={require("../logo.png")}
                              alt="logo"
                            />
                          </figure>
                        </div>
                      </div>
                      <form onSubmit={submit}>
                        <p className="mb-4 text-center">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <input
                            ref={usernameRef}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            ref={passwordRef}
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-white inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gray-700 flex-auto">
                    <div className="text-white px-2 py-2 md:p-4 ">
                      <h4 className="text-xl font-medium mb-6 text-white-500 flex justify-center items-center">
                        Welcome to DTS
                      </h4>
                      <div className="flex justify-center items-center">
                      <figure className="w-[500px] h-[400] relative rounded-md drop-shadow-lg">
                        <img
                          className="w-full object-cover rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-md "
                          src={require("../logo.png")}
                          alt="logo"
                        />
                      </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
