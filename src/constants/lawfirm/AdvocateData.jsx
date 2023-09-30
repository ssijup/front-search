export const Columns=[
    {
        name: 'Name',
        selector: (row) => row.user.name,
        sortable: true,
      },
      {
        name: 'Phone',
        selector: (row) => row.phone,
        sortable: true,
      },
      {
        name: 'specialization',
        selector: (row) => row.specialization,
        sortable: true,
      },
]