'use client';

import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import TextField from '@/app/common/Input';
import CustomButton from '@/app/common/CustomButton';
import FileUpload from '@/app/common/FileUpload';

const Page = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);

  const handleFileChange = (files, type) => {
    if (type === 'banner') {
      setBannerImage(files[0]);
    } else if (type === 'logo') {
      setLogoImage(files[0]);
    } else if (type === 'other') {
      setOtherImages(Array.from(files));
    }
  };

  const handleDrop = (files, type) => {
    if (type === 'banner') {
      setBannerImage(files[0]);
    } else if (type === 'logo') {
      setLogoImage(files[0]);
    } else if (type === 'other') {
      setOtherImages(files);
    }
  };

  return (
    <div className="p-6 my-4 bg-white min-h-screen">
      <Grid container spacing={4}>
        {/* Left Side: Provider Information Form */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h2" gutterBottom style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Provider Information
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Provider Name" fullWidth margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Company Name" fullWidth margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Type" fullWidth margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Status" fullWidth margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Rating" fullWidth margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  title='Submit'
                  style={{ marginTop: '1rem', textTransform: 'none', fontWeight: 'bold' }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Right Side: Photo Uploads */}
        <Grid item xs={12} md={4}>
          {/* Banner Image Upload */}
          <Typography variant="h6" component="h3" gutterBottom style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Upload Banner Image
          </Typography>
          <FileUpload
            type="banner"
            onFileChange={(files) => handleFileChange(files, 'banner')}
            onDrop={(files) => handleDrop(files, 'banner')}
            borderColor="#007BFF"
            backgroundColor="#E6F0FF"
            iconColor="#007BFF"
            textColor="#0056b3"
            label="Banner Image"
            inputId="bannerInput"
          />

          {/* Logo Image Upload */}
          <Typography variant="h6" component="h3" gutterBottom style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Upload Logo Image
          </Typography>
          <FileUpload
            type="logo"
            onFileChange={(files) => handleFileChange(files, 'logo')}
            onDrop={(files) => handleDrop(files, 'logo')}
            borderColor="#28A745"
            backgroundColor="#E6F9EC"
            iconColor="#28A745"
            textColor="#1c7430"
            label="Logo Image"
            inputId="logoInput"
          />

          {/* Other Images Upload */}
          <Typography variant="h6" component="h3" gutterBottom style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Upload Other Images
          </Typography>
          <FileUpload
            type="other"
            onFileChange={(files) => handleFileChange(files, 'other')}
            onDrop={(files) => handleDrop(files, 'other')}
            borderColor="#FFC107"
            backgroundColor="#FFF9E6"
            iconColor="#FFC107"
            textColor="#FFA000"
            label="Other Images"
            inputId="otherInput"
            multiple
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
