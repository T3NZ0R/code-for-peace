import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useCollectionAPI } from '../../../hooks/useCollectionAPI';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import {updateManagerCollection, getImage} from '../../../services/DataService';

const ManagerEditPage = () => {
    const {id} = useParams();

    const {collectionDataById:{data}} = useCollectionAPI({id:id});

        const [selectedFile, setSelectedFile] = useState(null);
        const [previewFile,setPreviewFile] = useState(null);
        const [loading, setLoading] = useState(false);
        const [title, setTitle] = useState('');
        const [link, setLink] = useState('');
        const [description, setDescription] = useState('');
        const [sum, setSum] = useState('');

        useEffect(() =>{
            setTitle(data?.title);
            setLink(data?.link);
            setDescription(data?.description);
            setSum(data?.sum);
            // const img = getImage(data?.image)
            // setPreviewFile(img);
        },[data])
      
        const formData = new FormData();
      
        const handleCreate = async () => {
          try {
          formData.append('title', title);
          formData.append('link', link);
          formData.append('description', description);
          formData.append('sum', sum + '');
          formData.append('image', selectedFile);

          await updateManagerCollection(id,formData);
          } catch (error) {
            console.error('Error creating collection:', error);
          }
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
      justifyContent={"center"}
      sx={{
        width: "50%",
        margin: '0 25%',
        padding: '20px',
      }}
    >
        <Typography sx={{fontSize: '20px', marginBottom: "25px", marginLeft: '35%'}}>EDIT COLLECTION</Typography>
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
        Edit
      </Button>
    </Grid>
    );
};

export default ManagerEditPage;
