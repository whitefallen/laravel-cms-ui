import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-editformat',
  templateUrl: './editformat.component.html',
  styleUrls: ['./editformat.component.css'],
  providers: [RequestService]
})
export class EditformatComponent extends BaseComponent implements OnInit {
  public format: any;
  public creator: any;
  public format_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.format_id = this.route.snapshot.paramMap.get('id');
    this.requestService.formatDetail(this.format_id).subscribe((data: any) => {
      this.format = data.data;
      this.creator = data.data.creator;
    });
  }

  edit(editForm: NgForm) {
    this.requestService.editFormat(
      this.format_id, editForm.value.formatName, editForm.value.formatDescription, this.format.created_by, sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if(data.info === 1){
        this.router.navigate(['/dashboard/format/', this.format_id, 'detail']);
      }else{
        alert('something went wrong');
      }
    });

  }
}
