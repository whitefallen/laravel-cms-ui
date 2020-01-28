import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formatdetail',
  templateUrl: './formatdetail.component.html',
  styleUrls: ['./formatdetail.component.css'],
  providers: [RequestService]
})
export class FormatdetailComponent implements OnInit {
  public format: any;
  public creator: any;
  public editor: any;
  public format_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.format_id = this.route.snapshot.paramMap.get('id');
    this.requestService.formatDetail(this.format_id).subscribe((data: any) => {
      this.format = data.data;
      this.creator = data.data.creator;
      this.editor = data.data.editor;
    });
  }

  delete(id: string, name: string) {
    if(confirm('Are you sure to delete the format: "' + name + '"?')) {
      this.requestService.deleteFormat(id).subscribe((data: any) => {
        if(data.info === 1) {
          this.router.navigate(['/dashboard/format']);
        }else{
          alert('something went wrong');
        }
      });
    }
  }
}
