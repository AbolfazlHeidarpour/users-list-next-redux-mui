import React from "react";
import CreateUserFormViewProps from "../types/CreateUserFormViewProps";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CreateUserFormTitle from "./CreateUserFormTitle";
import CreateUserForm from "./CreateUserForm";
import ResponseDialog from "./ResponseDialog";

const CreateUserFormView: React.FC<CreateUserFormViewProps> = (
  {
    hook: [
      user,
      onFNameChange,
      onLNameChange,
      onMobileChange,
      onSubmit,
      onClear,
      submitAllowed,
      cancelAllowed,
      isOpen,
      close,
      message
    ]
  }
) =>
  <>
    <Container
      contextMenu='menu'
      sx={{
        width: 400,
        boxShadow: '-1px 4px 8px rgba(0, 0, 0, 0.6)',
        backgroundColor: '#fafafa',
        pt: 3,
        pb: 2,
      }}
    >
      <Box
        sx={{
          flexDirection:'column',
        }}
        alignItems='center'
        display='flex'
        width='100%'
      >
        <CreateUserFormTitle />
        <CreateUserForm
          user={user}
          submitAllowed={submitAllowed}
          cancelAllowed={cancelAllowed}
          onFNameChange={onFNameChange}
          onLNameChange={onLNameChange}
          onMobileChange={onMobileChange}
          onSubmit={onSubmit}
          onClear={onClear}
        />
      </Box>
    </Container>
    <ResponseDialog
      isOpen={isOpen}
      close={close}
      message={message}
    />
  </>
;

export default CreateUserFormView;