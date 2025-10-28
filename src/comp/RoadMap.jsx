import React from "react";
import devopsLogo from '../assets/devops.svg'
const RoadMap = () => {
    return (

        <div className="flex justify-center my-4">
            <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-2">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={devopsLogo} alt="Devops" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Devops Roadmap</h5>
                    
                </div>
                
<ol className="items-center w-full my-4 mx-4 space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
    <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h3 className="font-medium leading-tight">Basic Networking</h3>
            <p className="text-sm">Try CCNA level-certification</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h3 className="font-medium leading-tight">Strong Linux Hands-on</h3>
            <p className="text-sm">Try RHCSA certification</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-medium leading-tight">AWS Hands on</h3>
            <p className="text-sm">Solution Architech Certification</p>
        </span>
    </li>
    <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            4
        </span>
        <span>
            <h3 className="font-medium leading-tight">Python/Shell Scripting</h3>
            <p className="text-sm">Basic Scripting Hands on</p>
        </span>
    </li>
</ol>


            </div>
        </div>

    )
}

export default RoadMap