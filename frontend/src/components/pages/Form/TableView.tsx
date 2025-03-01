import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
interface DataRow {
    [key: string]: any;
}

interface DynamicTableProps {
    rows: DataRow[];
    table: any[],
    path: string,
}

export const TableView = ({rows, table, path}:DynamicTableProps) => {


    const headers = table;

    return (
        <TableContainer
            component={Paper}
            className="ml-3.5"
            style={{
                height: '28vw',
                width: '89vw',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}
        >
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    backgroundColor: '#CFD8DC',
                                    color: '#37474F',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: path === 'employee' ? '0.6vw' : '0.7vw'
                                }}
                            >
                                {header.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length === 0 ? (
                        <TableRow className="h-[25.3vw]">
                            <TableCell colSpan={headers.length} align="center" className="h-full">
                                <div className="text-center text-orange-700 font-bold">No Data Available</div>
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                sx={{ '&:hover': { backgroundColor: '#CFD8DC' } }}
                            >
                                {headers.map((header) => (
                                    <TableCell
                                        key={header.id}
                                        sx={{
                                            fontSize: path === 'employee' ? '0.7vw' : '0.7vw',
                                            color: 'black',
                                            textAlign: 'center',
                                            height: '2.5vw',
                                            padding: '0.5vw',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {   row.sizes &&
                                            (
                                                (header.id === "sm" && row.sizes[0]?.quantity) ||
                                                (header.id === "md" && row.sizes[1]?.quantity) ||
                                                (header.id === "lg" && row.sizes[2]?.quantity) ||
                                                (header.id === "xl" && row.sizes[3]?.quantity) ||
                                                (header.id === "xxl" && row.sizes[4]?.quantity)
                                            ) || (row.supplier && (header.id === "supplierCode" && row.supplier.supplierCode)) ||
                                            row[header.id]
                                        }

                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
