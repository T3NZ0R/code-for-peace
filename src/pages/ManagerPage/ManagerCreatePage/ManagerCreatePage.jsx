import React, { useState } from 'react';
import { Button, Grid, Stack, TextField, Modal } from '@mui/material';
import {createCollection} from "../../../services/DataService";


const ManagerCreatePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewFile,setPreviewFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState(undefined);

  const [isModalOpen, setModalOpen] = useState(false);

  const formData = new FormData();



  const handleCreate = async () => {
    try {
    formData.append('title', title);
    formData.append('link', link);
    formData.append('description', description);
    formData.append('sum', sum + '');
    formData.append('image', selectedFile);

      await createCollection(formData);
      setModalOpen(true); 
    } catch (error) {
      console.error('Error creating collection:', error);
      // Handle error if needed
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewFile(reader.result)
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      // alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "50%",
        margin: '0 25%',
        padding: '20px',
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Link for QR Code"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          sx={{ width: '100%' }}
        />
        <TextField
          label="Sum"
          type="number"
          value={sum === undefined ? '' : sum}
          onChange={(e) => setSum(Number(e.target.value))}
        />
      </Stack>
      <Grid 
        sx={{
          marginTop:'35px',
          display:"flex",
          flexDirection:'column  '
          
        }}
      >
        <label htmlFor="upload-input">
          <input
            id="upload-input"
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <Button variant="contained" component="span"
          sx={{
            maxWidth:'100px'
          }}
        >
            Upload
          </Button>
        </label>
        
        {loading ? (
          <span>Loading...</span>
        ) : previewFile ? (
          <img
            src={previewFile}
            alt="Preview"
            style={{ width: '100px', height: '100px', marginTop: '10px' }}
          />
          
        ) : null}
        
     
      </Grid>
      <Button
      variant='contained'
      sx={{margin:'30px 0'}}
      onClick={handleCreate}
      >
        Create
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>Collection created successfully!</p>
        </Modal>
      )}
     
    </Grid>
  );
};

export default ManagerCreatePage;
