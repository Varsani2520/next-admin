import React, { useCallback } from 'react';
import { Paper, Typography } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

const FileUpload = ({ type, onFileChange, onDrop, ...props }) => {
  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const droppedFiles = Array.from(event.dataTransfer.files);
      if (onDrop) {
        onDrop(droppedFiles);
      }
    },
    [onDrop]
  );

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Paper
      style={{
        padding: '2rem',
        borderRadius: '12px',
        border: `2px dashed ${props.borderColor}`,
        backgroundColor: props.backgroundColor,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <CloudUploadIcon style={{ fontSize: '48px', color: props.iconColor }} />
      <Typography variant="body1" style={{ marginTop: '1rem', color: props.textColor, fontWeight: 'bold' }}>
        Drag & Drop {props.label} here or
        <label htmlFor={props.inputId} style={{ color: props.textColor, cursor: 'pointer', marginLeft: '0.5rem', fontWeight: 'bold' }}>
          Browse files
        </label>
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onFileChange(e.target.files)}
        style={{ display: 'none' }}
        id={props.inputId}
        multiple={props.multiple}
      />
    </Paper>
  );
};

export default FileUpload;
