import React, { useState } from 'react';
import Nav from '../components/Nav';
import Routeicons from '../components/Routeicons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');
  const [massage, setMassage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { name, email, number, course, massage });
  };

  return (
  <div className="">
      <Nav/>
      <Routeicons heading="Contact Us" page="Contact"/><div className='grid grid-cols-2 justify-center py-[100px] mx-5'>
        <div className=''><form onSubmit={handleSubmit} className="max-w-lg  mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-gray-400 border-2 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Your E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-400 border-2 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-1">
            Number:
          </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border-gray-400 border-2 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block mb-1">
            Course:
          </label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border-gray-400 border-2 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="massage" className="block mb-1">
            Message:
          </label>
          <textarea
            id="massage"
            value={massage}
            onChange={(e) => setMassage(e.target.value)}
            className="w-full border-gray-400 border-2 rounded p-2 h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded block mx-auto"
        >
          Submit
        </button>
      </form></div>
      <div className="w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.946891657604!2d73.84208028398767!3d18.44428510003573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac101655f87%3A0xcc5b0a20d60c9ac8!2sKatraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711556222448!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      </div>
      
    </div>
  );
};

export default Contact;