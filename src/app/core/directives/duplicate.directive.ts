import { Directive, TemplateRef, ViewContainerRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnInit()
  {
    this.viewContainer.createEmbeddedView(this.templateRef)
    this.viewContainer.createEmbeddedView(this.templateRef)
    this.viewContainer.createEmbeddedView(this.templateRef)

  }

}
