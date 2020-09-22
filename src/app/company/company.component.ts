import { Component, OnInit } from '@angular/core';
import {company} from '../company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  public companies:company[];
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
  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
   

    //call get companies function
    this.getcompanies()
  }



  //function to get companies
  getcompanies(){
    this.companyservice.getcompanies()
    .subscribe(function(data){
      // console.log(data);
   
      this.companies=data}.bind(this));
      
  }


  // status(){
  //   console.log(this.company.multiLanguageYn);
  // }


  add(){

    console.log(`company type is ${typeof(this.company)}`);
    console.log( Object.entries(this.company));
    
    
    //call a function to post the data
    this.companyservice.addcompany(this.company)
    .subscribe(company => {
      this.companies.push(company);
    });
    
    this.reset();

    
   }
   checkAll(check){
     console.log(check);
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
  


  delete(code:string): void {
    // this.countries = this.countries.filter(h => h.code !==this.countries.code);
    this.companies=this.companies.filter(function(company){
      if(company.coCode!=code){
        return true;
      }
      else {
        return false;
      }
    })
    console.log(`the country to be deleted is ${code}`);
    this.companyservice.deletecompany(code).subscribe();
  
    
  }


}



//sample data
// [{"coCode":"2 ","multiLanguageYn":"N","primaryLangauge":null,"secondryLangauge":null,"coName":"Innovations Software solutions","coShName":"ISS","add1":"Innovations ict Pvt Lmt","add2":"Ernakulam","add3":"6622","add4":null,"tel":null,"fax":null,"email":"innovationsict@gmail.com","website":"innovationsict.com","yrSDt":"2020-09-30","yrEDt":"2020-09-30","baseCurCode":"OMR","rateDecPts":null,"amtDecPts":2,"modiCloseDate":"2020-09-22","coNameSl":null,"add1Sl":null,"add2Sl":null,"add3Sl":null,"add4Sl":null,"databaseCode":null,"databaseName":null,"moduleType":"OT"},{"coCode":"4 ","multiLanguageYn":"Y","primaryLangauge":"ml","secondryLangauge":"en","coName":"Test By Aswathy","coShName":"TST","add1":"innovations ict,\nAngamaly","add2":"Kollam","add3":"697441","add4":null,"tel":null,"fax":null,"email":"testappications@innovationsict.com","website":"testCompany.com","yrSDt":"2020-09-30","yrEDt":"2020-09-30","baseCurCode":"USD","rateDecPts":null,"amtDecPts":3,"modiCloseDate":"2020-09-30","coNameSl":null,"add1Sl":null,"add2Sl":null,"add3Sl":null,"add4Sl":null,"databaseCode":null,"databaseName":null,"moduleType":"OT"}]