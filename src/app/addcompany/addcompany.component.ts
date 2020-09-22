import { Component, OnInit } from '@angular/core';
import {company} from '../company';
import {CompanyService} from '../company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  public company:company={

    coCode:null,
    multiLanguageYn:'N',
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
  

constructor(private companyservice:CompanyService,private datePipe:DatePipe ) { }

  ngOnInit(): void {
    this.getcompanies()
  }

  
  getcompanies(){
    this.companyservice.getcompanies()
    .subscribe(function(data){
      // console.log(data);
      this.companies=data}.bind(this));
  }


  add(){


    this.company.yrSDt = new Date(this.datePipe.transform(this.company.yrSDt, 'yyyy-MM-dd'));
    this.company.yrEDt = new Date(this.datePipe.transform(this.company.yrEDt, 'yyyy-MM-dd'));
    this.company.modiCloseDate=new Date(this.datePipe.transform(this.company.modiCloseDate, 'yyyy-MM-dd'));

    console.log(`company type is ${typeof(this.company)}`);
    console.log( Object.entries(this.company));
    
    
    //call a function to post the data
    this.companyservice.addcompany(this.company)
    .subscribe(company => {
      this.companies.push(company);
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
