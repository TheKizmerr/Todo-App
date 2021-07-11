// React imports
import React, { useState } from 'react';
// Components imports
import Validation from './Validation';
import TaskList from './components/TaskList';
import Header from './components/Header';
// CSS imports
import './components/css/ButtonComponents.css';
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {

    const [ user, setUser ] = useState({email: ""}); // Callback hook to return to the login page when logout
    const [ task, setTask ] = useState([]); // Users input stored in an array
    const [ tasks, setTasks ] = useState(""); // Input of the user's text
    const [ isComment, setIsComment ] = useState(false); // Hook to show/hide the comment box

    const Login = (details) => {

        const password = "user@com";
        const email = "Todo@2021"

        if (details.email === email && details.password === password) {
            setUser({
                email: details.email,
                password: details.password
            })
        } else {
            alert("Email or password are wrong. Please try again with the correct credentials.")
        }
    }

    const logout = () => {
        const logonMask = {email: ""}
        setUser(logonMask)
    }

    return (
        <div>
            {(user.email !== "") ? (
            <div>
            <Header />
            <TaskList 
                task={task}
                setTask={setTask}
                tasks={tasks}
                setTasks={setTasks}
                isComment={isComment}
                setIsComment={setIsComment}
            />
            <button className="btn btn-primary logout-button" onClick={logout}>Logout</button>
            </div>) : (
            <Validation 
                Login={Login}
            />
            )}
        </div>
    )
}

export default Form;
