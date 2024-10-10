import React from 'react';
import { getTimeline } from '@/services/apis';

const Timeline = () => {
  const [timeline, setTimeline] = React.useState([]);

  React.useEffect(() => {
    getTimeline().then(data => setTimeline(data.timelines));
  }, []);

  return (
    <div className="w-full px-4 lg:px-12 py-8 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
        Timeline
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timeline.map(element => (
          <li className="mb-12 ml-8" key={element._id}>
            <div className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-4 h-4 text-white dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="ml-12 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{element.title}</h3>
              <time className="block text-sm font-normal text-gray-500 dark:text-gray-400 mb-2">
                {element.timeline.from} - {element.timeline.to ? element.timeline.to : "Present"}
              </time>
              <p className="text-base text-gray-600 dark:text-gray-300">{element.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;