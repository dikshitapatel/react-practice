import React, { useState, SyntheticEvent } from 'react';
import { Autocomplete, TextField, Chip, Avatar } from '@mui/material';


interface EmailSuggestion {
  name: string;
  email: string;
  avatar: string;
}

const emailSuggestions: EmailSuggestion[] = [
  { name: 'John Doe', email: 'john.doe@example.com', avatar: 'https://via.placeholder.com/30' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', avatar: 'https://via.placeholder.com/30' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', avatar: 'https://via.placeholder.com/30' },
  // Add more suggestions as needed
];

const MUI = () => {
  const [emails, setEmails] = useState<EmailSuggestion[]>([]);

  const handleAddEmail = (event: SyntheticEvent, newValue: EmailSuggestion | string | null) => {
    if (typeof newValue === 'string') {
      // Handle free solo input
      const newEmail: EmailSuggestion = {
        name: newValue,
        email: newValue,
        avatar: 'https://via.placeholder.com/30', // Default avatar for free solo input
      };
      setEmails((prev) => [...prev, newEmail]);
    } else if (newValue && !emails.includes(newValue)) {
      setEmails((prev) => [...prev, newValue]);
    }
  };


  const handleDeleteEmail = (emailToDelete: EmailSuggestion) => {
    setEmails((prev) => prev.filter((email) => email !== emailToDelete));
  };

  return (
    <div className='App-body'>
      <Autocomplete
        className='MUI'
        onChange={handleAddEmail}
        options={emailSuggestions}
        getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            return option.email;
          }}
        renderInput={(params) => <TextField {...params} variant="outlined" label="Add email" />}
        renderOption={(props, option) =>
             (
          <li {...props}>
            <Avatar alt={option.name} src={option.avatar} style={{ marginRight: 8 }} />
            {option.name} ({option.email})
          </li>
        )}
        freeSolo
      />
      <div>
        {emails.map((email) => (
          <Chip
            key={email.email}
            avatar={<Avatar alt={email.name} src={email.avatar} />}
            label={email.email}
            onDelete={() => handleDeleteEmail(email)}
          />
        ))}
      </div>
    </div>
  );
};

export default MUI;
