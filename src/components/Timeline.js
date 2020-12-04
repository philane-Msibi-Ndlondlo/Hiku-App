import React, { useState } from 'react'

function Timeline({ project, addTaskOnProject, taskToggleCompleted, onTaskDelete, onProjectDelete }) {

    const [ taskName, setTaskName ] = useState('');
    const [ taskComment, setTaskComment ] = useState('');
    const [ projectStatus, setprojectStatus ] = useState(false);
    const status = [];

    const onTaskChange = e => setTaskName(e.target.value);
    const onTaskCommentChange = e => setTaskComment(e.target.value);

    const progressStatus = () => {
        
        project.tasks.forEach(task => {
            if (task.completed) {
                status.push('Completed');
            }
        })
    }

    progressStatus();

    return (
        <div className="projectContainer">
            <div className="max-w-sm rounded overflow-hidden shadow">
                    <div className="px-6 py-4">
                    <div className="close_project">
                        <div className="text-sm mb-2">{ project.created }</div>
                        <span onClick={(e) => { e.preventDefault(); onProjectDelete(project.id) } } className="material-icons deleteIcon text-red-500">
                        close
                        </span>
                    </div>
                    <div className="font-bold text-xl mb-2">{ project.title }</div>
                    <div className="px-6 py-4 bg-white no-left-pad">
                    {
                        ( status.length !== 0 ) ? ( status.length === project.tasks.length ) ? (<span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Completed { status.length + '/' + project.tasks.length }</span>) : (<span className="inline-block bg-yellow-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">In Progress { status.length + '/' + project.tasks.length }</span>) : (<span className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Not Started { status.length + '/' + project.tasks.length }</span>)
                    }
                        
                    </div>
                    <div className="addTaskForm">
                        <form>
                            <div>
                                <input onChange={onTaskChange} value={taskName} type="text" placeholder="Add a task on project" />    
                                <textarea onChange={onTaskCommentChange} value={taskComment} placeholder="Add task comment"></textarea>
                            </div>  
                            <button onClick={(e) => { e.preventDefault(); addTaskOnProject({ id: project.tasks.length + 1, title: taskName, comment: taskComment, completed: false }, project.id); setTaskName(''); setTaskComment('') }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Add Task
                            </button>
                        </form>
                    </div>
                    <ul className="subTasks">
                        {
                            (project.tasks.length === 0) ? (<div>No Tasks Yet.</div>) : 
                                project.tasks.map(task => {
                                    if ( task.completed ) {
                                        
                                        return (
                                            <li key={task.id} className="lowOpacity" onClick={() => { taskToggleCompleted(project.id, task.id) }}>
                                                <div className="col">
                                                    <div>
                                                        <input checked={ task.completed } onChange={() => { taskToggleCompleted(project.id, task.id) }} type="checkbox" />
                                                        <span>{ task.title }</span>
                                                    </div>
                                                    <span onClick={(e) => { e.preventDefault(); onTaskDelete(project.id, task.id) } } className="material-icons deleteIcon text-red-500">
                                                    delete_forever
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    { task.comment }
                                                </p>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={task.id} onClick={() => { taskToggleCompleted(project.id, task.id) }}>
                                            <div className="col">
                                                <div>
                                                    <input checked={ task.completed } onChange={() => { taskToggleCompleted(project.id, task.id) }} type="checkbox" />
                                                    <span>{ task.title }</span>
                                                </div>
                                                <span onClick={(e) => { e.preventDefault(); onTaskDelete(project.id, task.id) } } className="material-icons deleteIcon text-red-500">
                                                delete_forever
                                                </span>
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                { task.comment }
                                            </p>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    <div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Timeline
