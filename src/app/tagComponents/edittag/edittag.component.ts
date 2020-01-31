import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-edittag',
  templateUrl: './edittag.component.html',
  styleUrls: ['./edittag.component.css'],
  providers: [RequestService]
})
export class EdittagComponent extends BaseComponent implements OnInit {
  public tag: any;
  public creator: any;
  public tag_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.tag_id = this.route.snapshot.paramMap.get('id');
    this.requestService.tagDetail(this.tag_id).subscribe((data: any) => {
      this.tag = data.data;
      this.creator = data.data.creator;
    });
  }

  edit(editForm: NgForm) {
    this.requestService.editTag(
      this.tag_id, editForm.value.tagName, editForm.value.tagDescription, this.tag.created_by, sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if(data.info === 1){
        this.router.navigate(['/dashboard/tag/', this.tag_id, 'detail']);
      }else{
        alert('something went wrong');
      }
    });

  }

}
