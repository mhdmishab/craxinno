import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubmittedData } from '../app/slices/authSlice';
import { useParams } from 'react-router-dom';

const SubmittedInfo = () => {
    const dispatch = useDispatch();
    const savedData = useSelector((state) => state?.userData?.Details);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSubmittedData(id));
    }, [dispatch]);

    const formatDateString = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    return (
        <div className="bg-white p-5 mx-auto max-w-md">
            <div className="mb-4 mt-5">
                <h1 className="text-3xl font-bold mb-2 text-center">Submitted Information</h1>

                <div className="flex flex-col justify-center mt-5 space-y-6">
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Email:</label>
                        <p className="text-black">{savedData.email}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Full Name:</label>
                        <p className="text-black">{savedData.fullName}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Date of Birth:</label>
                        <p className="text-black">{formatDateString(savedData.dateOfBirth)}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Sirname:</label>
                        <p className="text-black">{savedData.title}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Current Address:</label>
                        <p className="text-black">{savedData.currentAddress}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl text-center font-serif font-semibold mb-1 ">Duration at Current Address:</label>
                        <p className="text-black">{savedData.durationAtCurrentAddress}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className="text-gray-600 text-xl font-serif text-center font-semibold mb-1">Employment Status:</label>
                        <p className="text-black">{savedData.employmentStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmittedInfo;
