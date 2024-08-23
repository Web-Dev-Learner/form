import React from 'react';

const Jobs = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions', location: 'Remote', description: 'Build and maintain front-end interfaces using React.' },
    { id: 2, title: 'Backend Developer', company: 'Code Factory', location: 'New York, NY', description: 'Develop and manage server-side applications and APIs.' },
    { id: 3, title: 'UI/UX Designer', company: 'Design Studio', location: 'San Francisco, CA', description: 'Create user-centered designs and improve user experience.' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Jobs</h1>
      <div className="space-y-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company} - {job.location}</p>
            <p className="text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

