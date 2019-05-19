import { NextPage } from "next";

import { DataTable, DataTableContent, DataTableBody, DataTableHead, DataTableRow, DataTableCell, DataTableHeadCell } from '@rmwc/data-table'


export const masks: { [index: number]: string } = {
  32: '1',
  31: '0',
  30: '2',
  29: '6',
  28: '14',
  27: '30',
  26: '62',
  25: '126',
  24: '254',
  23: '510',
  22: '1022',
  21: '2046',
  20: '4094',
  19: '8190',
  18: '16382',
  17: '32766',
  16: '65534',
  15: '131070',
  14: '262142',
  13: '524286',
  12: '1048574',
  11: '2097150',
  10: '4194302',
  9: '8388606',
  8: '16777214',
  7: '33554430',
  6: '6710886200',
  5: '134217726',
  4: '268435454',
  3: '536870910',
  2: '1073741822',
  1: '2147483646'
};

import '@rmwc/data-table/data-table.css';

const MasksPage: NextPage<{}> = () => {
  return (
    <div>
    <DataTable>
      <DataTableContent>
        <DataTableHead>
          <DataTableRow>
            <DataTableHeadCell>Item</DataTableHeadCell>
            <DataTableHeadCell
              alignEnd
            >
              Quantity (Click Me)
            </DataTableHeadCell>
            <DataTableHeadCell alignEnd>Unit price</DataTableHeadCell>
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          <DataTableRow>
            <DataTableCell>Cookies</DataTableCell>
            <DataTableCell alignEnd>25</DataTableCell>
            <DataTableCell alignEnd>$2.90</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Pizza</DataTableCell>
            <DataTableCell alignEnd>50</DataTableCell>
            <DataTableCell alignEnd>$1.25</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Icecream</DataTableCell>
            <DataTableCell alignEnd>10</DataTableCell>
            <DataTableCell alignEnd>$2.35</DataTableCell>
          </DataTableRow>
        </DataTableBody>
      </DataTableContent>
    </DataTable>
    </div>
  )
}

export default MasksPage
