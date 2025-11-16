import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];
  @Input() showPageSizeSelector: boolean = true;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  totalPages: number = 0;
  visiblePageNumbers: (number | string)[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage'] || changes['currentPage']) {
      this.calculatePagination();
    }
  }

  private calculatePagination(): void {
    this.totalPages = this.getTotalPages();
    this.visiblePageNumbers = this.getVisiblePageNumbers();
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getVisiblePageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (current <= 3) {
        // Near the beginning
        pages.push(2, 3, 4, '...', total);
      } else if (current >= total - 2) {
        // Near the end
        pages.push('...', total - 3, total - 2, total - 1, total);
      } else {
        // In the middle
        pages.push('...', current - 1, current, current + 1, '...', total);
      }
    }

    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.calculatePagination();
      this.pageChange.emit(page);
    }
  }

  previousPage(): void {
    if (this.hasPrevious()) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.hasNext()) {
      this.goToPage(this.currentPage + 1);
    }
  }

  hasPrevious(): boolean {
    return this.currentPage > 1;
  }

  hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  changePageSize(size: number): void {
    this.itemsPerPage = size;
    this.currentPage = 1; // Reset to first page
    this.calculatePagination();
    this.pageSizeChange.emit(size);
    this.pageChange.emit(1);
  }

  getDisplayText(): string {
    if (this.totalItems === 0) {
      return 'No products found';
    }

    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);

    return `Showing ${start}-${end} of ${this.totalItems} products`;
  }

  isPageNumber(value: number | string): boolean {
    return typeof value === 'number';
  }

  isCurrentPage(page: number): boolean {
    return page === this.currentPage;
  }
}
