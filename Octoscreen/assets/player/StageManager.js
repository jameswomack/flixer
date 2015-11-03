var kStageIsReadyEvent="StageManager:StageIsReadyEvent";
var StageManager=Class.create({
  initialize:function(a,b){
    this.textureManager=a;this.scriptManager=b;this.stage=document.getElementById("stage");this.hyperlinkPlane=document.getElementById("hyperlinkPlane");this.stageWidth=0;
    this.stageHeight=0;this.showWidth=0;this.showHeight=0;this.audioTrackOffset=0;this.audioTrackIconSize=0;
    document.observe(kShowSizeDidChangeEvent,this.handleShowSizeDidChangeEvent.bind(this));
    document.observe(kStageSizeDidChangeEvent,this.handleStageSizeDidChangeEvent.bind(this))
                            
  },
    removeTexture:function(a){a.parentNode.removeChild(a)},addHyperlink:function(b){var a=document.createElement("div");setElementProperty(a,"pointer-events","all");a.setAttribute("class","hyperlink");a.style.left=b.x+"px";a.style.top=b.y+"px";a.style.width=b.width+"px";a.style.height=b.height+"px";this.hyperlinkPlane.appendChild(a)},clearAllHyperlinks:function(){var a;while(this.hyperlinkPlane.childNodes.length>0){this.hyperlinkPlane.removeChild(this.hyperlinkPlane.firstChild)}this.audioTrackOffset=this.audioTrackSpacer},
    handleStageSizeDidChangeEvent:function(a){
                              var ww = window.innerWidth / 1280;
                              var hh = window.innerHeight / 760;
                              var vv = Math.max(ww, hh);
                              
                              var stageEl = document.querySelector('#stageArea');
                              stageEl.style.width = '100%';
                              stageEl.style.height = '100%';
                              var stageEl2 = document.querySelector('#stage');
                              stageEl2.style.width = '100%';
                              stageEl2.style.height = '100%';
                              stageEl.style.transform = 'scaleX(' + vv + ') scaleY('+vv+')';
    },
    handleShowSizeDidChangeEvent: function(a) {
      

      this.showWidth=a.memo.width;this.showHeight=a.memo.height;
                              this.adjustStageToFit(this.stage);this.adjustStageToFit(this.hyperlinkPlane);
                              this.audioTrackIconSize=this.showHeight/4;this.audioTrackSpacer=this.audioTrackIconSize/4;this.audioTrackOffset=this.audioTrackSpacer},adjustStageToFit:function(b){if((this.showWidth!=0)&&(this.stageWidth!=0)){var d=this.stageHeight/this.showHeight;var f=this.stageWidth/this.showWidth;var a="scaleX("+vv+") scaleY("+vv+")";var e=20;var c=Math.tan(Math.PI/180*e/2)*15*(this.showWidth>this.showHeight?this.showHeight:this.showWidth);this.perspective=c;setElementProperty(b,kTransformOriginPropertyName,kTransformOriginCenterPropertyValue);setElementProperty(b,kTransformPropertyName,a);setElementProperty(b,kPerspectiveOriginPropertyName,kTransformOriginCenterPropertyValue);setElementProperty(b,kTransformStylePropertyName,kTransformStylePreserve3DPropertyValue);setElementPosition(b,(d-1)*this.showHeight/2,(f-1)*this.showWidth/2,this.showWidth,this.showHeight);document.fire(kStageIsReadyEvent,{})}},debugGetStageStatistics:function(){var a={numTextures:0,numPixels:0,numDegraded:0};this.debugRecursivelyWalkDomFrom(this.stage,a);return a}});
