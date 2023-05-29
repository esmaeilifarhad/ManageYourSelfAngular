import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit,AfterViewInit {
add:number=0;
  @ViewChild('par') par!: ElementRef ;

public ngOnInit(){
}
public ngAfterViewInit(): void {
  this.par.nativeElement.innerHtml = "123456"
}
public increment(){
  this.add++;
}
}
