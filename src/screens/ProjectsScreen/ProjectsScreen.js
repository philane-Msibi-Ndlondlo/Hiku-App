import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';

import lottie from 'lottie-web';
import '../../styles/app.css';
import './ProjectsScreen.css';
import Timeline from '../../components/Timeline';

import { CubeGrid } from 'styled-loaders-react';

function ProjectsScreen() {

    const [ projectName, setProjectName ] = useState('');
    const [ projectNameError, setProjectNameError ] = useState(' ');
    const [ projects, setProjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const writeProjects = async (data) => {
        await localStorage.setItem('projects', JSON.stringify(data));
        console.log("done writing");
    }

    const getProjects = async () => {

        const result = await localStorage.getItem("projects") || [];

        const data =  await JSON.parse(result);
        return data;
    }

    useEffect(() => {
        
        setTimeout(() => {
            getCurrentProjects();
            setLoading(false);
        }, 1000);
    }, [])

    const getCurrentProjects = () => {
        
        getProjects().then(data => { setProjects(data); })
    }
    
    const onProjectNameChange = e => setProjectName(e.target.value);

    const taskToggleCompleted = (projectId, taskId) => {
        
        const newProjects = projects.map(project => {

            if (  project.id === projectId) {
                
                const newProjectTasks = project.tasks.map( task => {

                    if ( task.id === taskId ) {
                        
                        return { ...task, completed: !task.completed }
                    }

                    return task;
                });
                project.tasks = newProjectTasks;

            }

            return project;

        })

        setProjects(newProjects);
        writeProjects(projects);
    }

    const onProjectNameSubmit = async (e) => {

        e.preventDefault();

        if (!projectName) {
            setProjectNameError('Oops! Project Title is Required!');
            return;
        }

        if (projectName.length > 22) {
            setProjectNameError('Oops! Project Title is too long. Max is 22 chars!');
            return;
        }

        const newProjects = [{ id: projects.length + 1, title: projectName, created: new Date().toUTCString().split('GMT')[0], tasks: []  }, ...projects];
        await writeProjects(newProjects);
        await getCurrentProjects();
        setProjectName('');
        setProjectNameError(' ');
        
    }

    const onTaskDelete = async (projectId, taskId) => {

        const newProjects = projects.map(project => {
            if (project.id === projectId) {
                const newProjectTasks = project.tasks.filter(task => (task.id !== taskId));
                project.tasks = newProjectTasks;
            }
            return project;
        })

        await writeProjects(newProjects);
        await getCurrentProjects();
    }

    const onProjectDelete = async (projectId) => {

        const newProjects = await projects.filter(project => ( project.id !== projectId))

        //await setProjects(newProjects);
        await writeProjects(newProjects);
        await getCurrentProjects();
    }

    const addTaskOnProject = async (task, projectId) => {

        let newProjects = projects.map( project => {

            

            if ( projectId === project.id ) {
                let newProjectTasks = project.tasks;

                newProjectTasks = [ ...project.tasks, task ];

                project.tasks = [...newProjectTasks];

                return project;
            }

            return project;

            
        } );

        await writeProjects(newProjects);
        await getCurrentProjects();
    }
    

    return (
        <div className="bg">
            <Navbar />
                <div className="mr-6 ml-6 mt-6 mb-6 pb-6">              
                    <div className="right">
                        <h4 className="mb-6 tabName text-green-600">Team Project Timelines</h4>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center border-teal-500 py-2">
                                <input value={projectName} name="projectName" onChange={onProjectNameChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="E.g. Attend Change Request CR455" aria-label="E.g. Attend Change Request CR455" />
                                <button onClick={onProjectNameSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                Add Project
                                </button>
                            </div>
                            <p className="text-red-500 text-xs italic">{ projectNameError }</p>
                        </form>
                        
                    </div>
                    <div className="TimelinesContainer">
                    {
                        (loading) ? (<div className="center"><CubeGrid color="#4fbb7c" /><p className="text-lg italic">Patience is a virtue...</p></div>) : 
                        (projects.length === 0) ? (<div className="center"><p className="text-lg italic">No Projects Yet...</p></div>) : 
                        projects.reverse().map(project => (<Timeline key={project.id} project={project} onProjectDelete={onProjectDelete} onTaskDelete={onTaskDelete} addTaskOnProject={addTaskOnProject} taskToggleCompleted={taskToggleCompleted} />))
                    }
                    </div>
                </div>
        </div>
    )
}

export default ProjectsScreen;

