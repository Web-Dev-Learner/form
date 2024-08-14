import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, loadFormDataFromLocalStorage } from '../features/formSlice';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  // Local state for validation
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Clear local storage data on component mount to reset form
    localStorage.removeItem('formData');
    // Reset form data in redux
    dispatch(loadFormDataFromLocalStorage({}));

    // Load data from local storage if available
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      dispatch(loadFormDataFromLocalStorage(savedData));
    }
  }, [dispatch]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters';
    }
    
    if (!formData.address) {
      newErrors.address = 'Address is required';
    } else if (formData.address.length > 100) {
      newErrors.address = 'Address cannot exceed 100 characters';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits and contain only numbers';
    }
    
    if (!formData.countryCode) {
      newErrors.countryCode = 'Country code is required';
    }
    
    if (!formData.interest) {
      newErrors.interest = 'Area of interest is required';
    } else if (/\d/.test(formData.interest)) {
      newErrors.interest = 'Area of interest should not contain numbers';
    } else if (formData.interest.length > 50) {
      newErrors.interest = 'Area of interest cannot exceed 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  };

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl mx-auto p-8 bg-gray-200 rounded-lg shadow-md mt-10 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">FormCraft</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            maxLength="50"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${errors.name ? 'border-red-500' : 'border-gray-300'} hover:border-blue-500 focus:ring-blue-500`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            maxLength="100"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${errors.address ? 'border-red-500' : 'border-gray-300'} hover:border-blue-500 focus:ring-blue-500`}
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            maxLength="10"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${errors.phone ? 'border-red-500' : 'border-gray-300'} hover:border-blue-500 focus:ring-blue-500`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="countryCode">Country Code</label>
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode || ''}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${errors.countryCode ? 'border-red-500' : 'border-gray-300'} hover:border-blue-500 focus:ring-blue-500`}
          >
            <option value="">Select your country code</option>
            <option value="+1">+1 (USA)</option>
            <option value="+91">+91 (India)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="interest">Area of Interest</label>
          <input
            type="text"
            id="interest"
            name="interest"
            value={formData.interest || ''}
            onChange={handleChange}
            maxLength="50"
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${errors.interest ? 'border-red-500' : 'border-gray-300'} hover:border-blue-500 focus:ring-blue-500`}
            placeholder="Enter your area of interest"
          />
          {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-4 rounded-lg font-semibold hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

