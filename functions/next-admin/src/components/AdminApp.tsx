'use client'
import * as React from 'react'
import { EventList, EventShow, EventCreate, EventEdit } from './events'
import { Admin, Resource } from 'react-admin'
import { dataProvider, authProvider } from '@/firebase'

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="events" list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} />
  </Admin>
)

export default AdminApp
