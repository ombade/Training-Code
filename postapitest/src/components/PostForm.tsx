import React, { useState } from 'react';

interface PostData {
  title: string;
  body: string;
  userId: number;
}

interface ResponseData extends PostData {
  id: number;
}

const CreatePostForm = () => {
  const [formData, setFormData] = useState<PostData>({
    title: '',
    body: '',
    userId: 1,
  });
  const [submittedData, setSubmittedData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
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

      const data: ResponseData = await response.json();
      setSubmittedData(data);
      setFormData({ title: '', body: '', userId: 1 }); // Reset form
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit post');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'userId' ? Number(value) : value
    }));
  };

  return (
    <div className="post-form">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Content:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit">Submit Post</button>
      </form>

      {error && <div className="error-message">Error: {error}</div>}

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Post Data:</h3>
          <p>ID: {submittedData.id}</p>
          <p>Title: {submittedData.title}</p>
          <p>Content: {submittedData.body}</p>
          <p>User ID: {submittedData.userId}</p>
        </div>
      )}
    </div>
  );
};

export default CreatePostForm;