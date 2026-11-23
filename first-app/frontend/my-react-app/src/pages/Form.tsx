import { useForm } from "react-hook-form";

type EmpFormData = {
  fullName: string;
  email: string;
  password: string;
  age: number;
  phone: string;
  dob: string;
  gender: "male" | "female" | "others";
  employmentType: ("fullTime" | "partTime" | "contractual")[];
  interviewTime: string;
  department: string;
  skills: string[];
  resume?: FileList;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<EmpFormData>();

  const onSubmit = (data: EmpFormData) => {
    console.log("Response",data);
    console.log("Resume", data.resume?.[0])
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("fullName", {
                  required: "This field is required",
                })}
                placeholder="Enter full name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password")}
                autoComplete="new-password"
                placeholder="Enter Password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Age</label>
              <input
                type="number"
                {...register("age", {
                  valueAsNumber: true,
                })}
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
                {...register("phone")}
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
                {...register("dob")}
                placeholder="Enter Date of Birth"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Gender</label>

              <div className="flex gap-5">
                <label className="flex gap-2">
                  <input type="radio" {...register("gender")} value="male" />
                  Male
                </label>
                <label className="flex gap-2">
                  <input type="radio" {...register("gender")} value="female" />
                  Female
                </label>
                <label className="flex gap-2">
                  <input type="radio" {...register("gender")} value="others" />
                  Others
                </label>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Employment Type
              </label>

              <div className="flex gap-5">
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    {...register("employmentType")}
                    value="fullTime"
                  />
                  Full Time
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    {...register("employmentType")}
                    value="partTime"
                  />
                  Part Time
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    {...register("employmentType")}
                    value="contractual"
                  />
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
                {...register("interviewTime")}
                placeholder="Enter Date of Birth"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Department
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                {...register("department")}
              >
                <option value="">Select Department</option>
                <option value="engineering">Engineering</option>
                <option value="hr">Human Resources</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Skills</label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                multiple
                {...register("skills")}
              >
                <option value="">Select Skills</option>
                <option value="react">React JS</option>
                <option value="node">Node JS</option>
                <option value="typeScript">TypeScript</option>
                <option value="express">Express</option>
                <option value="mongodb">Mongo DB</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Upload Resume
              </label>
              <input type="file" accept=".pdf, .doc" {...register("resume")} />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
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
