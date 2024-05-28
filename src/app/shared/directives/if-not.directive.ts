import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
//Structural Directive

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective {
  private _hasView = false;

  @Input() set appIfNot(condition: boolean){ //<div *appIfNot="true">...</div>
    if(!condition === this._hasView) return;
    if (!condition === true) {
      this.createView();
    }else{
      this.destroyView();
    }
  };

  @Input() appIfNotElse: TemplateRef<HTMLElement>| null = null; //<div *appIfNot="true else" ></div>
 
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<HTMLElement>){}

  createView() {
    this.viewContainer.createEmbeddedView(this.template);
    this._hasView = true;
  } 

  destroyView() {
    this.viewContainer.clear();
    if(this.appIfNotElse){
      this.viewContainer.createEmbeddedView(this.appIfNotElse);
    }
  }
  

}
