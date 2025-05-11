import React from 'react'

const DataTable = () => {

    
const assignments = [
    {
      courseName: "Design Accessibility",
      level: "Advanced",
      duration: "12 Hours",
      progress: 32,
      status: "In Progress",
    },
    {
      courseName: "Figma for Beginner",
      level: "Intermediate",
      duration: "12 Hours",
      progress: 50,
      status: "In Progress",
    },
    {
      courseName: "Framer Design",
      level: "Advanced",
      duration: "12 Hours",
      progress: 72,
      status: "In Progress",
    },
    {
      courseName: "Frontend Development",
      level: "Intermediate",
      duration: "12 Hours",
      progress: 100,
      status: "Completed",
    },
    {
      courseName: "Design Accessibility",
      level: "Advanced",
      duration: "12 Hours",
      progress: 32,
      status: "In Progress",
    },
    {
      courseName: "Figma for Beginner",
      level: "Intermediate",
      duration: "12 Hours",
      progress: 50,
      status: "In Progress",
    },
    {
      courseName: "Framer Design",
      level: "Advanced",
      duration: "12 Hours",
      progress: 72,
      status: "In Progress",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6  min-h-screen">
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Your Assignments</h2>
        <button className="text-blue-600 hover:underline text-sm sm:text-base">
          See All
        </button>
      </div>

      <div className="hidden sm:grid grid-cols-3 text-gray-600 font-semibold mb-4 px-4">
        <div>Course Name</div>
        <div>Progress</div>
        <div>Status</div>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="flex flex-col sm:grid sm:grid-cols-3 gap-4 items-start sm:items-center bg-white rounded-xl px-4 py-3 hover:bg-blue-100 transition"
          >
            {/* Course Name */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">
                {assignment.courseName.split("")[0]}
              </div>
              <div>
                <div className="font-bold">{assignment.courseName}</div>
                <div className="text-sm text-gray-500">
                  {assignment.level} • {assignment.duration}
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="w-full">
              <div className="flex items-center gap-2">
                <div className="w-full sm:w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm">{assignment.progress}%</div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 w-full">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  assignment.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {assignment.status}
              </span>
              <span className="text-xl text-gray-400 hidden sm:inline">
                &gt;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default DataTable
