import React from "react";

const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Employee Registration
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          Enter employee information below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <h2 className="border-b pb-2 text-lg font-semibold text-gray-700">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Enter Password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Age</label>
              <input
                type="number"
                name="age"
                min="18"
                max="65"
                placeholder="Enter Age"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                placeholder="Enter Date of Birth"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div >
              <label className="mb-1 block text-sm font-medium">Gender</label>

              <div className="flex gap-5">
                <label className="flex gap-2">
                  <input 
                  type="radio" 
                  name="gender" 
                  value="male"/>
                  Male
                </label>
                <label className="flex gap-2">
                  <input 
                  type="radio" 
                  name="gender" 
                  value="female"/>
                  Female
                </label>
                <label className="flex gap-2">
                  <input 
                  type="radio" 
                  name="gender" 
                  value="others"/>
                  Others
                </label>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Employment Type</label>

              <div className="flex gap-5">
                <label className="flex gap-2">
                  <input 
                  type="checkbox" 
                  name="empType" 
                  value="fullTime"/>
                  Full Time
                </label>
                <label className="flex gap-2">
                  <input 
                  type="checkbox" 
                  name="empType" 
                  value="partTime"/>
                  Part Time
                </label>
                <label className="flex gap-2">
                  <input 
                  type="checkbox" 
                  name="empType" 
                  value="contractual"/>
                  Contractual
                </label>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Prefered Interview Time
              </label>
              <input
                type="datetime-local"
                name="interviewTime"
                placeholder="Enter Date of Birth"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
          <button
            type="submit"
            className="border-1 rounded-md p-2 text-white border-black bg-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
