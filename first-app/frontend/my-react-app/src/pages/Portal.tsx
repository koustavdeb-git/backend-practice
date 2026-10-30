import { useState } from 'react'
import { createPortal } from 'react-dom';

const Portal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        alert("Employee deleted!");
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">
                Employee Management
            </h1>

            {/* Parent container with overflow-hidden */}
            <div className="relative h-64 overflow-hidden rounded-xl border-2 border-red-400 bg-white p-5 shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-gray-800">
                            Rahul Sharma
                        </h2>
                        <p className="text-sm text-gray-500">
                            Frontend Developer
                        </p>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    This container has a fixed height and overflow-hidden.
                </p>

                {/* Modal is rendered inside the clipped container */}
                {showModal &&
                    createPortal(
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Delete Employee?
                                </h2>

                                <p className="mt-3 text-sm text-gray-600">
                                    Are you sure you want to delete Rahul Sharma?
                                </p>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleDelete}
                                        className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                                    >
                                        Confirm Delete
                                    </button>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>

            <p className="mt-5 text-sm text-red-600">
                Red border = parent container. Open the modal to see
                how it gets clipped.
            </p>
        </div>
    );
}

export default Portal
