YUI.add("aui-tree-node",function(e,t){var n=e.Lang,r=n.isString,i=n.isBoolean,s=n.isFunction,o="cache",u="io",a="loaded",f="loading",l="paginator",c="alwaysShowHitArea",h="",p="boundingBox",d="children",v="collapsed",m="container",g="content",y="contentBox",b="draggable",w="expanded",E="hidden",S="hitAreaEl",x="hitarea",T="icon",N="iconEl",C="invalid",k="hide",L="id",A="label",O="labelEl",M="lastSelected",_="leaf",D="node",P="over",H="ownerTree",B="parentNode",j="radio",F="rendered",I="selected",q=" ",R="tree",U="tree-node",z="ok",W="refresh",X="minus",V="plus",$="file",J="close",K="folder",Q="sign",G="open",Y="check",Z=function(t){return t instanceof e.TreeNode},et=function(t){return t instanceof e.TreeView},tt=e.getClassName,nt=tt(R,v),rt=tt(R,m),it=tt(R,w),st=tt(R,x),ot=tt(R,T),ut=tt(R,A),at=tt(R,D),ft=tt(R,D,g),lt=tt(R,D,g,C),ct=tt(R,D,E,x),ht=tt(R,D,_),pt=tt(R,D,P),dt=tt(R,D,I),vt=tt(T,K,J),mt=tt(T,K,G),gt=tt(T,V),yt=tt(T,X),bt=tt(T,$),wt=tt(T,W),Et=tt(T,z,Q),St=tt(T,Y),xt='<i class="'+st+'"></i>',Tt='<i class="'+ot+'"></i>',Nt='<span class="'+ut+'"></span>',Ct="<ul></ul>",kt='<li class="'+at+'"></li>',Lt='<div class="'+ft+'"></div>',At=e.Component.create({NAME:U,ATTRS:{boundingBox:{valueFn:function(){return e.Node.create(kt)}},contentBox:{valueFn:function(){return e.Node.create(Lt)}},cssClasses:{value:{file:{iconCheck:St,iconCollapsed:vt,iconExpanded:mt,iconHitAreaCollapsed:[st,gt].join(q),iconHitAreaExpanded:[st,yt].join(q),iconLeaf:bt,iconLoading:wt,iconUncheck:St},normal:{iconCheck:St,iconHitAreaCollapsed:[st,gt].join(q),iconHitAreaExpanded:[st,yt].join(q),iconLoading:wt,iconUncheck:St}}},draggable:{value:!0,validator:i},ownerTree:{value:null},label:{value:h,validator:r},expanded:{value:!1,validator:i},id:{validator:r,valueFn:function(){return e.guid()}},leaf:{value:!0,setter:function(e){return e&&this.get(d).length?!1:e},validator:i},nextSibling:{getter:"_getSibling",value:null,validator:Z},prevSibling:{getter:"_getSibling",value:null,validator:Z},parentNode:{value:null,validator:function(e){return Z(e)||et(e)}},labelEl:{setter:e.one,valueFn:function(){var t=this.get(A);return e.Node.create(Nt).html(t).unselectable()}},hitAreaEl:{setter:e.one,valueFn:function(){return e.Node.create(xt)}},alwaysShowHitArea:{value:!0,validator:i},iconEl:{setter:e.one,valueFn:function(){return e.Node.create(Tt)}},tabIndex:{value:null},rendered:{validator:i,value:!1}},AUGMENTS:[e.TreeData,e.TreeViewIO,e.TreeViewPaginator],EXTENDS:e.Base,prototype:{BOUNDING_TEMPLATE:kt,CONTENT_TEMPLATE:Lt,initializer:function(){var e=this,t=e.get(p);t.setData(U,e),e._syncTreeNodeBBId(),e._uiSetDraggable(e.get(b)),e._uiSetExpanded(e.get(w)),e._uiSetLeaf(e.get(_))},bindUI:function(){var e=this;e.after({childrenChange:e._afterSetChildren,draggableChange:e._afterDraggableChange,expandedChange:e._afterExpandedChange,idChange:e._afterSetId,leafChange:e._afterLeafChange,loadingChange:e._afterLoadingChange})},render:function(e){var t=this;t.get(F)||(t.renderUI(),t.bindUI(),t.syncUI(),t.set(F,!0));if(e){var n=t.get(p),r=t.get(l);n.appendTo(e),r&&n.insertBefore(r.element)}},renderUI:function(){var e=this;e._renderBoundingBox(),e._renderContentBox()},syncUI:function(){var e=this;e._syncIconUI()},_afterDraggableChange:function(e){var t=this;t._uiSetDraggable(e.newVal),t._syncIconUI()},_afterExpandedChange:function(e){var t=this;t._uiSetExpanded(e.newVal),t._syncIconUI()},_afterLeafChange:function(e){var t=this;t._uiSetLeaf(e.newVal),t._syncIconUI()},_afterLoadingChange:function(e){var t=this;t._syncIconUI()},_afterSetChildren:function(e){var t=this;t._syncIconUI()},_renderContentBox:function(e){var t=this,n=t.get(y);if(!t.isLeaf()){var r=t.get(w);n.addClass(r?it:nt),r&&t.expand()}return n},_renderBoundingBox:function(){var e=this,t=e.get(p),n=e.get(y);n.append(e.get(N)),n.append(e.get(O)),t.append(n);var r=e.get(m);return r&&(e.get(w)||r.hide(),t.append(r)),t},_createNodeContainer:function(){var t=this,n=t.get(m)||e.Node.create(Ct);return n.addClass(rt),t.set(m,n),n},_syncHitArea:function(){var e=this;e.get(c)||e.getChildrenLength()?e.showHitArea():e.hideHitArea()},_syncIconUI:function(){var e=this,t=e.get(H);if(t){var n=t.get("type"),r=e.get("cssClasses."+n);if(!r)return;var i=e.get(w),s=e.get(N),o=e.get(S),u=e.isLeaf()?r.iconLeaf:i?r.iconExpanded:r.iconCollapsed,a=i?r.iconHitAreaExpanded:r.iconHitAreaCollapsed;e.get(f)&&(u=r.iconLoading),s.setAttribute("className",u||h),o.setAttribute("className",a||h)}e._syncHitArea()},appendChild:function(){var t=this;t.isLeaf()||e.TreeNode.superclass.appendChild.apply(t,arguments)},collapse:function(){var e=this;e.set(w,!1)},collapseAll:function(){var t=this;e.TreeNode.superclass.collapseAll.apply(t,arguments),t.collapse()},contains:function(e){return e.isAncestor(this)},expand:function(){var e=this;e.set(w,!0)},expandAll:function(){var t=this;e.TreeNode.superclass.expandAll.apply(t,arguments),t.expand()},getDepth:function(){var e=this,t=0,n=e.get(B);while(n)++t,n=n.get(B);return t},hasChildNodes:function(){var t=this;return!t.isLeaf()&&e.TreeNode.superclass.hasChildNodes.apply(this,arguments)},isSelected:function(){return this.get(y).hasClass(dt)},isLeaf:function(){var e=this;return e.get(_)},isAncestor:function(e){var t=this,n=t.get(B);while(n){if(n===e)return!0;n=n.get(B)}return!1},toggle:function(){var e=this;e.get(w)?e.collapse():e.expand()},select:function(){var e=this,t=e.get(H);t&&t.set(M,e),e.get(y).addClass(dt),e.fire("select")},unselect:function(){var e=this;e.get(y).removeClass(dt),e.fire("unselect")},over:function(){this.get(y).addClass(pt)},out:function(){this.get(y).removeClass(pt)},showHitArea:function(){var e=this,t=e.get(S);t.removeClass(ct)},hideHitArea:function(){var e=this,t=e.get(S);t.addClass(ct)},_syncTreeNodeBBId:function(e){var t=this;t.get(p).attr(L,t.get(L))},_getSibling:function(e,t){var n=this,r="_"+t,i=n[r];return i!==null&&!Z(i)&&(i=null,n[r]=i),i},_uiSetDraggable:function(e){var t=this,n=t.get(y);n.toggleClass(lt,!e)},_uiSetExpanded:function(e){var t=this;if(!
t.isLeaf()){var n=t.get(m),r=t.get(y),i=t.get(H),s=r.one(jt+st);e?(r.replaceClass(nt,it),!i&&s&&s.replaceClass(gt,yt),n&&n.show()):(r.replaceClass(it,nt),!i&&s&&s.replaceClass(yt,gt),n&&n.hide())}},_uiSetLeaf:function(e){var t=this,n=t.get(y);e?(t.get(m).remove(),t.get(S).remove()):(n.prepend(t.get(S)),t._createNodeContainer(),t._uiSetExpanded(t.get(w))),n.toggleClass(ht,e)}}});e.TreeNode=At;var Ot="tree-node-io",Mt=e.Component.create({NAME:Ot,ATTRS:{loading:{value:!1,validator:i},loaded:{value:!1,validator:i},cache:{value:!0,validator:i},leaf:{value:!1,validator:i}},AUGMENTS:[e.TreeViewPaginator,e.TreeViewIO],EXTENDS:e.TreeNode,prototype:{bindUI:function(){var t=this;e.TreeNodeIO.superclass.bindUI.apply(this,arguments),t.on("ioRequestSuccess",t._onIOSuccess,t)},syncUI:function(){var t=this;e.TreeNodeIO.superclass.syncUI.apply(this,arguments)},expand:function(){var t=this,n=t.get(o),r=t.get(u),i=t.get(a),s=t.get(f);n||t.set(a,!1),r&&!i&&!s&&!t.hasChildNodes()&&!t.isLeaf()?(n||t.empty(),t.initIO()):e.TreeNodeIO.superclass.expand.apply(this,arguments)},_inheritOwnerTreeAttrs:function(){var t=this,n=t.get(H);if(n){if(!t.get(u)){var r=e.clone(n.get(u),!0,function(e,t){return s(e)&&(e.defaultFn||e.wrappedFn)?!1:!0});t.set(u,r)}if(!t.get(l)){var i=n.get(l),o=e.clone(i);o&&o.element&&(o.element=i.element.clone()),t.set(l,o)}}},_onIOSuccess:function(e){var t=this;t.expand()}}});e.TreeNodeIO=Mt;var _t="checkbox",Dt="checked",Pt="checkContainerEl",Ht="checkEl",Bt="checkName",jt=".",t="name",Ft="tree-node-check",It=tt(R,D,_t),qt=tt(R,D,_t,m),Rt=tt(R,D,Dt),Ut='<i class="'+qt+'"></i>',zt='<input class="'+It+'" type="checkbox" />',Wt=e.Component.create({NAME:Ft,ATTRS:{checked:{value:!1,validator:i},checkName:{value:Ft,validator:r},checkContainerEl:{setter:e.one,valueFn:function(){return e.Node.create(Ut)}},checkEl:{setter:e.one,valueFn:function(){var n=this.get(Bt);return e.Node.create(zt).attr(t,n)}}},EXTENDS:e.TreeNodeIO,prototype:{renderUI:function(){var t=this;e.TreeNodeCheck.superclass.renderUI.apply(t,arguments);var n=t.get(O),r=t.get(Ht),i=t.get(Pt);r.hide(),i.append(r),n.placeBefore(i),t.isChecked()&&t.check(),t._uiSetChecked(t.get(Dt))},bindUI:function(){var t=this,n=t.get(y),r=t.get(O);e.TreeNodeCheck.superclass.bindUI.apply(t,arguments),t.after("checkedChange",e.bind(t._afterCheckedChange,t)),n.delegate("click",e.bind(t.toggleCheck,t),jt+qt),n.delegate("click",e.bind(t.toggleCheck,t),jt+ut),r.swallowEvent("dblclick")},check:function(e){var t=this;t.set(Dt,!0,{originalTarget:e})},uncheck:function(e){var t=this;t.set(Dt,!1,{originalTarget:e})},toggleCheck:function(){var e=this,t=e.get(Ht),n=t.attr(Dt);n?e.uncheck():e.check()},isChecked:function(){var e=this;return e.get(Dt)},_syncIconCheckUI:function(){var e=this,t=e.get(H);if(t){var n=t.get("type"),r=e.get("cssClasses."+n);if(!r)return;var i=e.get(Pt),s=e.isChecked();i.removeClass(s?r.iconUncheck:r.iconCheck),i.addClass(s?r.iconCheck:r.iconUncheck)}},_afterCheckedChange:function(e){var t=this;t._uiSetChecked(e.newVal)},_uiSetChecked:function(e){var t=this;t._syncIconCheckUI(),t.get(Ht).attr(Dt,e?Dt:h),t.get(y).toggleClass(Rt,e)}}});e.TreeNodeCheck=Wt;var Xt="child",Vt="tree-node-task",$t="unchecked",Jt=function(t){return t instanceof e.TreeNodeCheck},Kt=tt(R,D,Xt,$t),Qt=e.Component.create({NAME:Vt,EXTENDS:e.TreeNodeCheck,prototype:{check:function(t){var n=this,r=n.get(y);t=t||n,n.isLeaf()||n.eachChildren(function(e){Jt(e)&&e.check(t)}),n.eachParent(function(e){if(Jt(e)){var t=!1;e.eachChildren(function(e){if(e!==n&&!e.isChecked())t=!0;else{var r=e.get(y).hasClass(Kt);r&&(t=!0)}}),t||e.get(y).removeClass(Kt)}}),r.removeClass(Kt),e.TreeNodeTask.superclass.check.call(this,t)},uncheck:function(t){var n=this,r=n.get(y);t=t||n,n.isLeaf()||n.eachChildren(function(n){n instanceof e.TreeNodeCheck&&n.uncheck(t)}),n.eachParent(function(e){Jt(e)&&e.isChecked()&&e.get(y).addClass(Kt)}),r.removeClass(Kt),e.TreeNodeTask.superclass.uncheck.call(this,t)}}});e.TreeNodeTask=Qt;var Gt="tree-node-radio",Yt=function(t){return t instanceof e.TreeNodeRadio},Zt=tt(R,D,j),en=e.Component.create({NAME:Gt,ATTRS:{cssClasses:{value:{file:{iconCheck:Et,iconCollapsed:vt,iconExpanded:mt,iconHitAreaCollapsed:[st,gt].join(q),iconHitAreaExpanded:[st,yt].join(q),iconLeaf:bt,iconLoading:wt,iconUncheck:Et},normal:{iconCheck:Et,iconHitAreaCollapsed:[st,gt].join(q),iconHitAreaExpanded:[st,yt].join(q),iconLoading:wt,iconUncheck:Et}}}},EXTENDS:e.TreeNodeTask,prototype:{renderUI:function(){var t=this;e.TreeNodeRadio.superclass.renderUI.apply(t,arguments),t.get(y).addClass(Zt)},check:function(){var t=this;t._uncheckNodesRadio(),e.TreeNodeRadio.superclass.check.apply(this,arguments)},_uncheckNodesRadio:function(t){var n=this,r;if(t)r=t.get(d);else{var i=n.get(H);if(!i)return;r=i.get(d)}e.Array.each(r,function(e,t,r){e.isLeaf()||n._uncheckNodesRadio(e),Yt(e)&&e.uncheck()})}}});e.TreeNodeRadio=en,e.TreeNode.nodeTypes={radio:e.TreeNodeRadio,task:e.TreeNodeTask,check:e.TreeNodeCheck,node:e.TreeNode,io:e.TreeNodeIO}},"2.0.0",{requires:["json","querystring-stringify","aui-tree-data","aui-tree-io","aui-tree-paginator"]});
