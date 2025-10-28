import React from "react";
import devopsLogo from '../assets/devops.svg'
const RoadMap = () => {
    return (

        <div className="flex justify-center">
            <div class="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={devopsLogo} alt="Devops" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Devops Roadmap</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400"></span>
                </div>
                
<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h3 class="font-medium leading-tight">User info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h3 class="font-medium leading-tight">Company info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 class="font-medium leading-tight">Payment info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
</ol>


            </div>
        </div>

    )
}

export default RoadMap