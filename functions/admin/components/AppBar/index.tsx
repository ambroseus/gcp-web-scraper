'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container, Group, Box } from '@mantine/core'
import classes from './AppBar.module.css'

const mainLinks = [
  { link: '/', label: 'Events' },
  { link: '/', label: 'Sources' },
  { link: '/', label: 'Jobs' },
  { link: '/', label: 'Settings' },
]

export function AppBar() {
  const [active, setActive] = useState(0)

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(index)
      }}
    >
      {item.label}
    </Link>
  ))

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Box className={classes.links}>
          <Group gap={0} justify="flex-start" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
      </Container>
    </header>
  )
}
