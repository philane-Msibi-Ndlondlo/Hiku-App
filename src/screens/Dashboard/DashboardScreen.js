import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import lottie from 'lottie-web';
import '../../styles/app.css';
import './DashboardScreen.css';

function DashboardScreen() {
    return (
        <div>
        <Navbar />
        <div className="mr-6 ml-6 mt-6 mb-6">
            <h1 className="mb-6 tabName text-green-600">Dashboard</h1>
            <div className="flex flex-wrap">
                <div className="w-full">
                <div class="px-2">
                <div class="flex -mx-2">
                  <div class="w-1/3 px-2">
                    <div class="bg-gray-400 h-12">
                    <h1>Projects</h1>
                    

                    </div>
                  </div>
                  <div class="w-1/3 px-2">
                    <div class="bg-gray-500 h-12">
                        <h1>Team Members</h1>
                    </div>
                  </div>
                  <div class="w-1/3 px-2">
                    <div class="bg-gray-400 h-12">
                        <h1>Progress</h1>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DashboardScreen
