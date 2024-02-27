import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"

// Importez vos composants comme avant
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

// Ajoutez des styles CSS pour l'entête de colonne et le bouton
import "./datatables.scss" // Assurez-vous que le chemin est correct
import SearchBar from "components/Common/Searchbar"
import { Button } from "reactstrap"

const DatatableTables = () => {
  const [searchValue, setSearchValue] = useState("")
  const columns = useMemo(
    () => [
      {
        header: () => <span>Numéro</span>,
        accessorKey: "numéro",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => <span>Nom</span>,
        accessorKey: "nom",
        Cell: ({ value }) => <div>{value}</div>,
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => <span>Prénom</span>,
        accessorKey: "prenom",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => <span>Dossiers en cours</span>,
        accessorKey: "Dossiersencours",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => <span>Dossiers terminés</span>,
        accessorKey: "Dossierstermines",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <Button color="primary" onClick={() => handleButtonClick(row)}>
            Consulter
          </Button>
        ),
      },
    ],
    []
  )

  const data = [
    {
      numéro: "1",
      nom: "Henry ",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "2",
      nom: "Rodriguez ",
      prenom: "Niguez",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "3",
      nom: "Alex ",
      prenom: "Rouland",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "4",
      nom: "Chawki ",
      prenom: "Souly",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "5",
      nom: "Nicolas ",
      prenom: "Remy",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "6",
      nom: "Siryl ",
      prenom: "Docard",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "7",
      nom: "Mahmoud ",
      prenom: "Foued",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "8",
      nom: "Pascal ",
      prenom: "Ramos",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "9",
      nom: "Mark ",
      prenom: "William",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "10",
      nom: "Jhon",
      prenom: "Joens",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numéro: "11",
      nom: "Henry",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },

    {
      numéro: "12",
      nom: "Henry",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
  ]
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const searchableStr =
        `${item.name} ${item.email} ${item.startDate}`.toLowerCase()
      return searchableStr.includes(searchValue.toLowerCase())
    })
  }, [data, searchValue])
  //meta title
  document.title = "Clients List | Skote - React Admin & Dashboard Template"

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Prosper iT" breadcrumbItem="Clients List">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "16px"
            }}
          >
            <SearchBar
              onSearch={setSearchValue}
              style={{ width: "100%", maxWidth: "600px" }}
            />
          </div>
        </Breadcrumbs>
        <TableContainer
          columns={columns}
          data={filteredData}
          isPagination={true}
          pagination="pagination"
          paginationWrapper="dataTables_paginate paging_simple_numbers"
          tableClass="table-bordered table-nowrap dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
        />
      </div>
    </div>
  )
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default DatatableTables
