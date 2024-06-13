// // import React, { useState } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';


// Modal.setAppElement('#root');

// function PetForm() {
//   const [petName, setPetName] = useState('');
//   const [petType, setPetType] = useState('');
//   const [breed, setBreed] = useState('');
//   const [age, setAge] = useState('');
//   const [description, setDescription] = useState('');
//   const [healthStatus, setHealthStatus] = useState('');
//   const [photo, setPhoto] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//    const obj={
//     name:petName,
//     type:petType,
//     breed:breed,
//     description:description,
//     healthStatus:healthStatus,
//     photos:"photo"
//    }

//     try {
//       const response = await axios.post('https://panasonic-pioneers-062.onrender.com/pets/add',obj);
//       console.log(response)
//       setModalIsOpen(true);
//     } catch (error) {
//       setErrorMessage('Failed to submit the form. Please check your CORS settings and try again.');
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <h1>Pet Details Form</h1>
//       <form onSubmit={handleSubmit} className="pet-form">
//         <div className="form-group">
//           <label>Pet Name</label>
//           <input
//             type="text"
//             value={petName}
//             onChange={(e) => setPetName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Type</label>
//           <select
//             value={petType}
//             onChange={(e) => setPetType(e.target.value)}
//             required
//           >
//             <option value="">Select type</option>
//             <option value="dogs">Dog</option>
//             <option value="cats">Cat</option>
//             <option value="rabbits">Rabbit</option>
//             <option value="rodents">Rodent</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Breed</label>
//           <input
//             type="text"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Health Status</label>
//           <input
//             type="text"
//             value={healthStatus}
//             onChange={(e) => setHealthStatus(e.target.value)}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>Photo</label>
//           <input
//             type="text"
//             onChange={(e) => setPhoto(e.target.value)}
//             required
//           />
//         </div> */}
//         <button type="submit">Submit</button>
//         {errorMessage && <p className="error">{errorMessage}</p>}
//       </form>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <h2>Success!</h2>
//         <p>Your pet details have been submitted successfully.</p>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// }

// export default PetForm;