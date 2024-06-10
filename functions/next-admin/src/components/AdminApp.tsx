'use client'
import * as React from 'react'
import { EventList, EventShow, EventCreate, EventEdit } from './events'
import { Admin, Resource } from 'react-admin'
import { FirebaseDataProvider, FirebaseAuthProvider, RAFirebaseOptions } from 'react-admin-firebase'
import { firebaseConfig as config } from '../api/credentials'

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: '/',
  watch: ['events'],
}
const dataProvider = FirebaseDataProvider(config, options)
const authProvider = FirebaseAuthProvider(config, options)

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="events" list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} />
  </Admin>
)

export default AdminApp
