import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaUser} from 'react-icons/fa'
// import { Form } from 'react-router-dom'
import{toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Spinner from './components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        // Redirect when log in
        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e)=>{
        setFormData((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))
    }

    const onSubmit = e=>{
        e.preventDefault()

        if(password !== password2){
            toast.error('password Mismatch')
        }else{
            const userData = {
              name,
              email,
              password
            }

            dispatch(register(userData))
        }

    }

    if(isLoading){
        return <Spinner/>
    }
  return (
    <>
    <section className='heading'>
     <h1>
        <FaUser/>Register
     </h1>
     <p>Please create an account</p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                type='text'
                id='name'
                name='name'
                value={name}
                className='form-control'
                placeholder='Please enter your name'
                onChange={onChange}
                />

                <input
                type='email'
                id='email'
                name='email'
                value={email}
                className='form-control'
                placeholder='Please enter your email'
                onChange={onChange}
                />

                <input
                type='password'
                id='password'
                name='password'
                value={password}
                className='form-control'
                placeholder='Please enter your password'
                onChange={onChange}
                />

                <input
                type='password'
                id='password2'
                name='password2'
                value={password2}
                className='form-control'
                placeholder='Please confirm password'
                onChange={onChange}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block">Submit</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register








    // const onSubmit = (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
      
    //     // Input validation (assuming password and password2 are form input values)
    //     if (password !== password2) {
    //       toast.error('Passwords do not match. Please try again.');
    //       return; // Exit the function early if passwords don't match
    //     }
      
    //     const userData = {
    //       name,
    //       email,
    //       password
    //     };
      
    //     // Dispatch the registration action with the validated user data
    //     dispatch(register(userData));
    //   };

      