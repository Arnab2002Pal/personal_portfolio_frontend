import React, { useState, useEffect } from 'react'
import './AdminPanel.css'
import { Button,Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { MdTimeline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser} from '../../actions/user'
import { useAlert } from 'react-alert';


const AdminPanel = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
 
  const { message: loginMessage } = useSelector((state) => state.login);

  const { message, error, loading } = useSelector((state) => state.update); 
    
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    
    const [skills , setSkills] = useState({})
    const [about , setAbout] = useState({})

    const submithandler = (e) =>{
        e.preventDefault()
        dispatch(updateUser(name, email, password , skills, about))

        console.log(name, email, password , skills, about);
    }
    

    //we dont need e.preventDefault becuasue its not attached to any form
    const logouthandler = () =>{
        dispatch(logout())
    }

    const handleAboutImage = (e)=>{

        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file)
        //used to read the contents of the selected file as a Data URL

        //The FileReader API provides methods for reading the contents of files. In this case, readAsDataURL() is called on a new instance of FileReader to read the selected file's data as a Data URL.

        //A Data URL is a way to represent the content of a file as a URL string, which can be used to display or manipulate the file's contents.

        //When the handleAboutImage function is called, it creates a new instance of FileReader named reader. Then, reader.readAsDataURL(e.target.files[0]) is executed, which reads the data of the selected file (e.target.files[0]) and converts it into a Data URL.

        // After reading the file as a Data URL, you can use the resulting URL for various purposes, such as displaying the image in an <img> tag or sending it to the server.


        Reader.onload = () =>{
            if(Reader.readyState === 2){
                setAbout({...about, avatar: Reader.result})
            }
        }
        //the readyState property can have different values, and 2 corresponds to the FileReader.DONE 

        //After Reader.readAsDataURL(e.target.files[0]) is called, the onload event is triggered when the file reading operation is complete. Inside the event handler, Reader.readyState is checked against 2 to ensure that the file reading is done.

        // Once the readyState is 2 (i.e., the file reading is completed), the Reader.result property contains the result of the file reading operation, which is the Data URL representing the file's contents. In the provided code, console.log(Reader.result) is used to log the Data URL to the console.

    }
    const handleImage = (e , val)=>{

        const file = e.target.files[0]
        const Reader = new FileReader();

        Reader.readAsDataURL(file)
        
        Reader.onload = () =>{
            if(Reader.readyState === 2){
                if(val === 1){
                    setSkills({...skills,image1: Reader.result})
                }
                if(val === 2){
                    setSkills({...skills,image2: Reader.result})
                }
                if(val === 3){
                    setSkills({...skills,image3: Reader.result})
                }
                if(val === 4){
                    setSkills({...skills,image4: Reader.result})
                }
                if(val === 5){
                    setSkills({...skills,image5: Reader.result})
                }
                if(val === 6){
                    setSkills({...skills,image6: Reader.result})
                }
            }
        }
        // Inside the Reader.onload event handler, the condition if (Reader.readyState === 2) checks if the readyState is 2, indicating that the file reading operation is done.

        // If val is equal to 1, indicating a specific condition, the setSkills function is called to update the skills state. It spreads the existing skills array (...skills) and adds a new object with the image1 property set to the Reader.result, which represents the Data URL of the selected file.

        // The setSkills function is likely a state update function using React's useState hook. It updates the skills state with a new value that includes the existing skills and the updated image1 property.
        
    }

    useEffect(() => {
        if(error){
          alert.error(error)
          dispatch({
            type:"CLEAR_ERRORS"
          })
        }
        if(message){
          alert.success(message)
          dispatch({
            type:"CLEAR_MESSAGE"
          })
        }
        if(loginMessage){
          alert.success(loginMessage)
          dispatch({
            type:"CLEAR_MESSAGE"
          })
        }
      }, [alert , error , message , dispatch , loginMessage])
    

  return (
    <div className='adminPanel'>
        <div className="adminPanelContainer">

        <Typography variant='h4'>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{marginRight: '1vmax'}}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
        </Typography>

        <form onSubmit={submithandler}>
            <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='adminPanelInputs'
            />
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='adminPanelInputs'
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='adminPanelInputs'
            />

            <div className="adminPanelSkill">
                <div>
                    <Typography>Skill: 1</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,1)}
                        accept='image/*'
                    />
                </div>
                <div>
                    <Typography>Skill: 2</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,2)}
                        accept='image/*'
                    />
                </div>
                <div>
                    <Typography>Skill: 3</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,3)}
                        accept='image/*'
                    />
                </div>
                <div>
                    <Typography>Skill: 4</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,4)}
                        accept='image/*'
                    />
                </div>
                <div>
                    <Typography>Skill: 5</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,5)}
                        accept='image/*'
                    />
                </div>
                <div>
                    <Typography>Skill: 6</Typography>
                    <input 
                        className='adminPanelFileUpload'
                        type="file" 
                        onChange={(e) => handleImage(e,6)}
                        accept='image/*'
                    />
                </div>
            </div>

            <div className='adminPanelAbout'>
                <fieldset>
                    <legend>About</legend>
                    <input 
                        type="text"
                        placeholder='Name'
                        value={about.name}
                        onChange={(e) => setAbout({
                            ...about, name: e.target.value
                        })}
                        className='adminPanelInputs'
                    />
                    <input 
                        type="text"
                        placeholder='Title'
                        value={about.title}
                        onChange={(e) => setAbout({
                            ...about, title: e.target.value
                        })}
                        className='adminPanelInputs'
                    />
                    <input 
                        type="text"
                        placeholder='Subtitle'
                        value={about.subtitle}
                        onChange={(e) => setAbout({
                            ...about, subtitle: e.target.value
                        })}
                        className='adminPanelInputs'
                    />
                    <input 
                        type="text"
                        placeholder='Description'
                        value={about.description}
                        onChange={(e) => setAbout({
                            ...about, description: e.target.value
                        })}
                        className='adminPanelInputs'
                    />
                    <input 
                        type="text"
                        placeholder='Quote'
                        value={about.quote}
                        onChange={(e) => setAbout({
                            ...about, quote: e.target.value
                        })}
                        className='adminPanelInputs'
                    />
                    <input
                        type='file'
                        onChange={handleAboutImage}
                        className='adminPanelFileUpload'
                        placeholder='Choose Avatar'
                        accept='image/*'
                        />
                </fieldset>
            </div>

            <Link to="/admin/timeline">TimeLine <MdTimeline/></Link>
            <Link to="/admin/project">Projects <AiOutlineProject/></Link>
            <Button type='submit' variant='contained' disabled={loading}>
                Update
            </Button>
        </form>
        <Button variant='contained'
        color='error'
        style={{
            display:"block" , margin:"4vmax auto"
        }}
        onClick={logouthandler}
        >
            Logout
        </Button>


        </div>    
    </div>
  )
}

export default AdminPanel
