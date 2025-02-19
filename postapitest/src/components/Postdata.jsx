// import React, { useState } from 'react';

// const CreatePostForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     body: '',
//     userId: 1,
//   });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setSubmittedData(data);
//       setFormData({ title: '', body: '', userId: 1 });
//     } catch (err) {
//       setError(err.message || 'Failed to submit post');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'userId' ? Number(value) : value
//     }));
//   };

//   return (
//     <div className="post-form">
//       <h2>Create New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="body">Content:</label>
//           <textarea
//             id="body"
//             name="body"
//             value={formData.body}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="userId">User ID:</label>
//           <input
//             type="number"
//             id="userId"
//             name="userId"
//             value={formData.userId}
//             onChange={handleChange}
//             min="1"
//             required
//           />
//         </div>

//         <button type="submit">Submit Post</button>
//       </form>

//       {error && <div className="error-message">Error: {error}</div>}

//       {submittedData && (
//         <div className="submitted-data">
//           <h3>Submitted Post Data:</h3>
//           <p>ID: {submittedData.id}</p>
//           <p>Title: {submittedData.title}</p>
//           <p>Content: {submittedData.body}</p>
//           <p>User ID: {submittedData.userId}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreatePostForm;


import React, { useState } from 'react';

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1,
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSubmittedData(data);
      setFormData({ title: '', body: '', userId: 1 });
      alert("Data Sent Successfully")
    } catch (err) {
      setError(err.message || 'Failed to submit post');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'userId' ? Number(value) : value
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Create New Post</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Content:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            style={{...styles.input, ...styles.textarea}}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>User ID:</label>
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            min="1"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit Post
        </button>
      </form>

      {error && <div style={styles.error}>{error}</div>}

      {submittedData && (
        <div style={styles.submittedData}>
          <h3 style={styles.submittedHeader}>Submitted Post Data:</h3>
          <p>ID: {submittedData.id}</p>
          <p>Title: {submittedData.title}</p>
          <p>Content: {submittedData.body}</p>
          <p>User ID: {submittedData.userId}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '1rem',
    color: '#34495e',
    fontWeight: '500',
  },
  input: {
    padding: '0.8rem',
    border: '1px solid #bdc3c7',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  textarea: {
    height: '100px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem',
    ':hover': {
      backgroundColor: '#2980b9',
    },
  },
  error: {
    color: '#e74c3c',
    backgroundColor: '#fadbd8',
    padding: '1rem',
    borderRadius: '6px',
    marginTop: '1rem',
  },
  submittedData: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#e8f4f8',
    borderRadius: '8px',
    borderLeft: '4px solid #3498db',
  },
  submittedHeader: {
    color: '#2c3e50',
    marginBottom: '1rem',
  },
};

export default CreatePostForm;