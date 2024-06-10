import * as React from 'react'
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  // Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
} from 'react-admin'

// interface EventModel {
//   Country: string
//   Dates: string
//   Description: string
//   Image: string
//   Kind: string
//   Location: string
//   Status: string
//   Title: string
//   Url: string
// }

// const EventFilter = (props: any) => {
//   return (
//     <Filter {...props}>
//       <TextInput label="Search" source="title" alwaysOn />
//     </Filter>
//   )
// }

export const EventList = (props: any) => (
  // <List {...props} filters={<EventFilter />}>
  <List {...props}>
    <Datagrid>
      <TextField source="Status" />
      <TextField source="Country" />
      <TextField source="Kind" />
      <TextField source="Title" />
      <TextField source="Description" />
      <TextField source="Location" />
      <TextField source="Dates" />
      <TextField source="Image" />
      <TextField source="Url" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
)

export const EventShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Status" />
      <TextField source="Country" />
      <TextField source="Kind" />
      <TextField source="Title" />
      <TextField source="Description" />
      <TextField source="Location" />
      <TextField source="Dates" />
      <TextField source="Image" />
      <TextField source="Url" />
    </SimpleShowLayout>
  </Show>
)

export const EventCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        source="Status"
        choices={[
          { id: 'DRAFT', name: 'DRAFT' },
          { id: 'VERIFIED', name: 'VERIFIED' },
        ]}
      />
      <TextInput source="Country" />
      <TextInput source="Kind" />
      <TextInput source="Title" />
      <TextInput source="Description" />
      <TextInput source="Location" />
      <TextInput source="Dates" />
      <TextInput source="Image" />
      <TextInput source="Url" />
    </SimpleForm>
  </Create>
)

export const EventEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <SelectInput
        source="Status"
        choices={[
          { id: 'DRAFT', name: 'DRAFT' },
          { id: 'VERIFIED', name: 'VERIFIED' },
        ]}
      />
      <TextInput source="Country" />
      <TextInput source="Kind" />
      <TextInput source="Title" />
      <TextInput source="Description" />
      <TextInput source="Location" />
      <TextInput source="Dates" />
      <TextInput source="Image" />
      <TextInput source="Url" />
    </SimpleForm>
  </Edit>
)
