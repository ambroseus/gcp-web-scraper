'use client'

import { useState } from 'react'
import {
  MantineReactTable,
  // createRow,
  type MRT_Row,
  type MRT_TableOptions,
  useMantineReactTable,
} from 'mantine-react-table'
import { ActionIcon, Flex, Text, Tooltip } from '@mantine/core'
import { ModalsProvider, modals } from '@mantine/modals'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { QueryProvider } from '@/components/QueryProvider'
import { type Event, columns, fakeData } from './makeData'

export const Table = () => (
  <QueryProvider>
    <ModalsProvider>
      <EditRowTable />
    </ModalsProvider>
  </QueryProvider>
)

function EditRowTable() {
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({})
  console.log(`EditRowTable > validationErrors:`, validationErrors)

  //call CREATE hook
  const { mutateAsync: createEvent, isPending: isCreatingEvent } = useCreateEvent()
  //call READ hook
  const {
    data: fetchedEvents = [],
    isError: isLoadingEventsError,
    isFetching: isFetchingEvents,
    isLoading: isLoadingEvents,
  } = useGetEvents()
  //call UPDATE hook
  const { mutateAsync: updateEvent, isPending: isUpdatingEvent } = useUpdateEvent()
  //call DELETE hook
  const { mutateAsync: deleteEvent, isPending: isDeletingEvent } = useDeleteEvent()

  //CREATE action
  const handleCreateEvent: MRT_TableOptions<Event>['onCreatingRowSave'] = async ({ values, exitCreatingMode }) => {
    const newValidationErrors = validateEvent(values)
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors)
      return
    }
    setValidationErrors({})
    await createEvent(values)
    exitCreatingMode()
  }

  //UPDATE action
  const handleSaveEvent: MRT_TableOptions<Event>['onEditingRowSave'] = async ({ values, table }) => {
    const newValidationErrors = validateEvent(values)
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors)
      return
    }
    setValidationErrors({})
    await updateEvent(values)
    table.setEditingRow(null) //exit editing mode
  }

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<Event>) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this event?',
      children: <Text>Are you sure you want to delete "{row.original.Title}"? This action cannot be undone.</Text>,
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteEvent(row.original.Url),
    })

  const table = useMantineReactTable({
    columns,
    data: fetchedEvents,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.Url,
    mantineToolbarAlertBannerProps: isLoadingEventsError
      ? {
          color: 'red',
          children: 'Error loading data',
        }
      : undefined,
    mantineTableContainerProps: {
      style: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateEvent,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveEvent,
    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)}>
            <IconEdit />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
    state: {
      isLoading: isLoadingEvents,
      isSaving: isCreatingEvent || isUpdatingEvent || isDeletingEvent,
      showAlertBanner: isLoadingEventsError,
      showProgressBars: isFetchingEvents,
    },
  })

  return <MantineReactTable table={table} />
}

//CREATE hook (post new user to api)
function useCreateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutationFn: async (user: Event) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)) //fake api call
      return Promise.resolve()
    },
    //client side optimistic update
    onMutate: (newEventInfo: Event) => {
      queryClient.setQueryData(
        ['events'],
        (prevEvents: any) =>
          [
            ...prevEvents,
            {
              ...newEventInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as Event[]
      )
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['events'] }), //refetch users after mutation, disabled for demo
  })
}

//READ hook (get users from api)
function useGetEvents() {
  return useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)) //fake api call
      return Promise.resolve(fakeData)
    },
    refetchOnWindowFocus: false,
  })
}

//UPDATE hook (put user in api)
function useUpdateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutationFn: async (user: Event) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)) //fake api call
      return Promise.resolve()
    },
    //client side optimistic update
    onMutate: (newEventInfo: Event) => {
      queryClient.setQueryData(['events'], (prevEvents: any) =>
        prevEvents?.map((prevEvent: Event) => (prevEvent.Url === newEventInfo.Url ? newEventInfo : prevEvent))
      )
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['events'] }), //refetch users after mutation, disabled for demo
  })
}

//DELETE hook (delete user in api)
function useDeleteEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutationFn: async (userId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)) //fake api call
      return Promise.resolve()
    },
    //client side optimistic update
    onMutate: (id: string) => {
      queryClient.setQueryData(['events'], (prevEvents: any) => prevEvents?.filter((user: Event) => user.Url !== id))
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['events'] }), //refetch users after mutation, disabled for demo
  })
}

const validateRequired = (value: string | number) => Boolean(String(value || '').trim())

function validateEvent(user: Event) {
  return {
    Url: !validateRequired(user.Url) ? 'Url is Required' : '',
    Country: !validateRequired(user.Country) ? 'Country is Required' : '',
    Dates: !validateRequired(user.Dates) ? 'Dates are required' : '',
  }
}
