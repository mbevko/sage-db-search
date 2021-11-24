import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const moduleOptions = [
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
  {
    key: 'Common Services',
    text: 'Common Services',
    value: 'Common Services',
  },
  {
    key: 'General Ledger',
    text: 'General Ledger',
    value: 'General Ledger',
  },
  {
    key: 'Inventory Control',
    text: 'Inventory Control',
    value: 'Inventory Control',
  },
  {
    key: 'Order Entry',
    text: 'Order Entry',
    value: 'Order Entry',
  },
  {
    key: 'Project and Job Costing',
    text: 'Project and Job Costing',
    value: 'Project and Job Costing',
  },
  {
    key: 'Purchase Orders',
    text: 'Purchase Orders',
    value: 'Purchase Orders',
  }
]

const DropdownInline = () => (
  <span>
    Filter by{' '}
    <Dropdown
      inline
      options={moduleOptions}
      defaultValue={moduleOptions[0].value}
    />
  </span>
)

export default DropdownInline