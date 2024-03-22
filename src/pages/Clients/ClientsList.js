import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"

// Importez vos composants comme avant
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

// Ajoutez des styles CSS pour l'entête de colonne et le bouton
import "./datatables.scss" // Assurez-vous que le chemin est correct
import SearchBar from "components/Common/Searchbar"
import { Button } from "reactstrap"
import AddClient from "./AddClient"

const ClientsList = () => {
  const [view, setView] = useState("list")

  const handleReturnToList = () => {
    setView("list")
  }

  const [data, setData] = useState([
    {
      numeroClient: "1",
      nom: "Henry ",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "2",
      nom: "Rodriguez ",
      prenom: "Niguez",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "3",
      nom: "Alex ",
      prenom: "Rouland",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "4",
      nom: "Chawki ",
      prenom: "Souly",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "5",
      nom: "Nicolas ",
      prenom: "Remy",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "6",
      nom: "Siryl ",
      prenom: "Docard",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "7",
      nom: "Mahmoud ",
      prenom: "Foued",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "8",
      nom: "Pascal ",
      prenom: "Ramos",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "9",
      nom: "Mark ",
      prenom: "William",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "10",
      nom: "Jhon",
      prenom: "Joens",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
    {
      numeroClient: "11",
      nom: "Henry",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },

    {
      numeroClient: "12",
      nom: "Henry",
      prenom: "Price",
      Dossiersencours: "2010/11/14",
      Dossierstermines: "2010/11/14",
    },
  ])


  const ajouterNouveauClient = nouveauClient => {
    const clientAvecNumero = { ...nouveauClient, numeroClient: data.length + 1 }
    setData([...data, clientAvecNumero])
  }

  const [searchValue, setSearchValue] = useState("")
  const columns = useMemo(
    () => [
      {
        header: () => <span>Numéro</span>,
        accessorKey: "numeroClient",
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

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const searchableStr =
        `${item.nom} ${item.prenom} ${item.startDate}`.toLowerCase()
      return searchableStr.includes(searchValue.toLowerCase())
    })
  }, [data, searchValue])
  //meta title
  document.title = "Clients | Prosper iT"

  return (
    <div className="page-content">
      <div className="container-fluid">
        {view === "list" && (
          <>
            <Breadcrumbs title="Prosper iT" breadcrumbItem="Clients">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  gap: "26px",
                }}
              >
                <SearchBar
                  onSearch={setSearchValue}
                  style={{ maxWidth: "600px" }}
                />
                
                  <Button
                    color="primary"
                    onClick={() => setView("addClient")}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Ajouter un client
                  </Button>
                
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
          </>
        )}
        {view === "addClient" && (
          <AddClient
            onAjouterClient={ajouterNouveauClient}
            onShowClientList={handleReturnToList}
          />
        )}
      </div>
    </div>
  )
}
ClientsList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default ClientsList
