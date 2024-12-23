import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchStateService } from '../../services/search-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(
    private router: Router,
    private searchStateService: SearchStateService,
  ) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.handleSearch(value || '');
      });
  }

  onSubmit() {
    this.handleSearch(this.searchControl.value || '');
  }

  private handleSearch(term: string) {
    if (term.trim()) {
      this.searchStateService.setSearchTerm(term);
      this.router.navigate(['/products'], {
        queryParams: { search: term },
      });
    } else {
      this.searchStateService.clearSearch();
      this.router.navigate(['/products']);
    }
  }
}
