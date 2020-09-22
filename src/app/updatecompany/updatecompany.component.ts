import { Component, OnInit } from '@angular/core';
import {company} from '../company';
import {CompanyService} from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  public company:company={

    coCode:null,
    multiLanguageYn:null,
    primaryLangauge:null,
    secondryLangauge:null,
    coName:null,
    coShName:null,
    add1:null,
    add2:null,
    add3:null,
    add4:null,
    email:null,
    website:null,
    yrSDt:null,
    yrEDt:null,
    baseCurCode:null,
    rateDecPts:null,
    modiCloseDate:null,
    moduleType:null


}
public companies:company[];
  

constructor(private countryservice:CompanyService, private route: ActivatedRoute,private datePipe:DatePipe ) { 

  }
 ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('coCode');
    console.log(`parameter  id is :${id}`);
    console.log(`type of id is ${typeof(id)}`);
    
    this.getsinglecompany(id);
  }

  getsinglecompany(id){
    this.countryservice.getsinglecompany(id)
   .subscribe((data)=>{

    // this.datePipe.transform(data.modiCloseDate, 'yyyy-MM-dd')
    // +`T12:00:00Z`
    //  data.modiCloseDate=new Date(data.modiCloseDate);
    //  data.yrEDt=new Date(data.yrEDt);
    //  data.yrSDt=new Date(data.yrSDt);

     data.yrSDt = new Date(this.datePipe.transform(data.yrSDt, 'yyyy-MM-dd'));
    
     data.modiCloseDate=new Date(this.datePipe.transform(data.modiCloseDate, 'yyyy-MM-dd'));
     console.log(`modified modiclose date is ${ data.modiCloseDate}`)
    

     data.yrSDt=new Date(this.datePipe.transform(data.yrSDt, 'yyyy-MM-dd'));
     data.yrEDt=new Date(this.datePipe.transform(data.yrEDt, 'yyyy-MM-dd'));
     console.log(Object.entries(data));

     return this.company=data});
  }

  update(){

  
  console.log(`country type is ${typeof(this.company)}`);
  console.log( Object.entries(this.company));
  console.log(`country type is ${typeof(this.company)}`);
  
  
  //call a function to post the data
  this.countryservice.updatecompany(this.company,this.company.coCode)
  .subscribe(company => {
  // this.companies.push(company);
  console.log(company);
  });
  
  this.reset();
  
  
  
  }


   reset(){
  this.company={
    coCode:null,
    multiLanguageYn:null,
    primaryLangauge:null,
    secondryLangauge:null,
    coName:null,
    coShName:null,
    add1:null,
    add2:null,
    add3:null,
    add4:null,
    email:null,
    website:null,
    yrSDt:null,
    yrEDt:null,
    baseCurCode:null,
    rateDecPts:null,
    modiCloseDate:null,
    moduleType:null

};
}
  
}
