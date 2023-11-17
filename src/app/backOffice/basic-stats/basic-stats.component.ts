import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.css']
})
export class BasicStatsComponent implements OnInit{
  stats: any[] = [];
  totalDuration!: number;
  totalContracts!: number;
  avgDuration!: number;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  




      this.contractService.getTotalDuration().subscribe(duration => {
        this.totalDuration = duration;
        this.contractService.getTotalContracts().subscribe(contracts => {
          this.totalContracts = contracts;
          this.avgDuration = this.totalDuration / this.totalContracts;
        });
      });
 
  }

  getTotalCount(): number {
    let totalCount = 0;
    this.stats.forEach(stat => {
      totalCount += stat.count;
    });
    return totalCount;
  }

}
