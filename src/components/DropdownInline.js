import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Accounts Payable',
    text: 'Accounts Payable',
    value: 'Accounts Payable',
  },
  {
    key: 'Accounts Receivable',
    text: 'Accounts Receivable',
    value: 'Accounts Receivable',
  },
  {
    key: 'Administrtative Services',
    text: 'Administrtative Services',
    value: 'Administrtative Services',
  },
  {
    key: 'Bank Services',
    text: 'Bank Services',
    value: 'Bank Services',
  },
]

const DropdownInline = () => (
  <span>
    Filter by{' '}
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)

export default DropdownInline