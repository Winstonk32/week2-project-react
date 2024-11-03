import React, { useState } from 'react';

function Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formData);
        alert("You about to get hacked, next time be smart!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen backdrop-blur-sm bg-black/80">
            <div className="w-full max-w-prose  p-40 bg-red-200 shadow-lg rounded-lg transition-all duration-300">
                <h2 className="text-2xl font-extralight text-center text-white-800 mb-6">Login-Form</h2>

                {step === 1 && (
                    <div>
                        <h3 className="text-xl text-white-600 font-medium mb-4 text-center">Your Username</h3>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
                        />
                        <button
                            onClick={handleNext}
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className="text-xl text-gray-600 font-medium mb-4 text-center">Your Email</h3>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={handlePrev}
                                className="py-3 px-5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                className="py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h3 className="text-xl text-gray-600 font-medium mb-4 text-center">Password</h3>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={handlePrev}
                                className="py-3 px-5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="py-3 px-5 bg-green-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Form;
