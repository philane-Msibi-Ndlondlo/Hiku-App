import React from 'react'


import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';

import './AddTimeline.css';

function AddTimeline() {
    return (
        <div>
            <Navbar />
                <div className="mr-6 ml-6 mt-6 mb-6 pb-6">
                    
                    <div className="right">
                        <h1 className="mb-6 tabName text-green-600">Add New Project</h1>
                    </div>
                    <div className="TimelinesContainer">
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Project Title
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />

                            </div>
                            <br />
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Project Description
                            </label>
                            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                            </div>
                            <button class="addProject bg-green-500">
                            Save Project
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
    )
}

export default AddTimeline
