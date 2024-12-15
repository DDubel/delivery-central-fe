import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import Order from "../../model/orders/Order";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatSortHeader,
    MatColumnDef,
    MatSortModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Order>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public constructor() {
    this.dataSource = new MatTableDataSource([
      new Order(1, 'A'),
      new Order(2, 'B'),
      new Order(3, 'C')
    ]);
    console.log(this.sort);
    this.dataSource.sort = this.sort;

    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {


  }
}
