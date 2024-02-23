import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa'; // Exemple d'utilisation de FontAwesome pour l'icône utilisateur

// Importez vos composants comme avant
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';

// Ajoutez des styles CSS pour l'entête de colonne et le bouton
import './datatables.scss'; // Assurez-vous que le chemin est correct

const DatatableTables = () => {
    const columns = useMemo(
        () => [
            {
                header: () => <span >Name</span>,
                accessorKey: 'name',
                Cell: ({ value }) => (
                  <div>{value}</div> // Ajoutez l'icône utilisateur à côté du nom
                ),
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: () => <span >Email</span>,
                accessorKey: 'email',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: () => <span >Start Date</span>,
                accessorKey: 'startDate',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Actions',
                id: 'actions',
                Cell: ({ row }) => (
                  <button className="edit-button" onClick={() => editUser(row.original)}>Edit</button> // Utilisez une classe pour styliser
                ),
            },
        ],
        []
    );
    

    const data = [
        {
            name: "Henry Price",
            email: "client@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Rodriguez Niguez",
            email: "rodri@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Alex Rouland",
            email: "alex@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Chawki Souly",
            email: "chawki@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Nicolas Remy",
            email: "nicols@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Siryl Docard",
            email: "siryl@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Mahmoud Foued",
            email: "mahmoud@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Pascal Ramos",
            email: "pascal@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Mark William",
            email: "mark@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Jhon Joens",
            email: "jhon@gmail.com",
            startDate: "2010/11/14",
        },
        {
            name: "Henry Price",
            email: "client@gmail.com",
            startDate: "2010/11/14",
        },
        
        {
            name: "Henry Price",
            email: "client@gmail.com",
            startDate: "2010/11/14",
        },
    ];

    //meta title
    document.title = "Clients List | Skote - React Admin & Dashboard Template";

    return (
        <div className="page-content">
            <div className="container-fluid">
                <Breadcrumbs title="Prosper iT" breadcrumbItem="Clients List" />

                <TableContainer
                    columns={columns}
                    data={data || []}
                    isGlobalFilter={true}
                    isPagination={true}
                    SearchPlaceholder="27 records..."
                    pagination="pagination"
                    paginationWrapper='dataTables_paginate paging_simple_numbers'
                    tableClass="table-bordered table-nowrap dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                />
            </div>
        </div>
    );
}
DatatableTables.propTypes = {
    preGlobalFilteredRows: PropTypes.any,

};


export default DatatableTables;